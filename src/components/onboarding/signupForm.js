import React, { useState } from "react";
import { render } from 'react-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import axios from 'axios';


const SignupForm = ({ errors, touched, handleSubmit }) => {
    const [inputValue, setInputValue] = useState({username: "", password: ""});
    return (
    <div className="formPage">
        <div className="formDiv">
            <h2 className="landingTitle">Sign up for Streemly</h2>
            <small>Enter your desired email and password to unlock the greatest HR tool man has ever made!</small>
            <Form onSubmit={handleSubmit}> 
            <div>
            <label>
                Enter an email.
                <Field type="text" name="username" placeholder="Email" />
                { touched.username && errors.username && <small>{errors.username}</small> }
            </label>
            </div>
            <div>
            <label>
                Enter an password.
                <Field type="password" name="password" placeholder="Password" />
                { touched.password && errors.password && <small>{errors.password}</small>}
            </label>
            </div>
            <div>
            <button className="aBtn">Sign Up</button>
            </div>
            </Form>

            <NavLink to='/'>Return to home.</NavLink>
        </div>
        <small>Copyright (c) 2019 Build-Week-Org-Chart</small>
    </div>
  );
};

const FormikSignupForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
      validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(5, 'Password must be 5 characters or longer').max(30, 'Password must be less than 30 characters').required(),
    }),
    handleSubmit(values, props) {
        // console.log(values);
        axios.post("https://lambda-practice-db.herokuapp.com/api/auth/register", values).then(res => {
          console.log('Here', res.data);
            localStorage.setItem('token', res.data.token)
            console.log(props.props.history);
            props.props.history.push("/login");
        // setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }

//   handleSubmit(values, {resetForm, setErrors, setSubmitting}) {


//   }
})(SignupForm);

export default FormikSignupForm;

render(<Router><FormikSignupForm /></Router>, document.getElementById('root') )
