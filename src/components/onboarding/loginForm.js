import React from "react";
import { render } from 'react-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import axios from 'axios';

const LoginForm = ({ errors, touched, handleSubmit }) => (
    <div className="formPage">
        <div className="formDiv">
            <h2 className="landingTitle">Login to Streemly</h2>
            <small> Login to unlock the greatest HR tool man has ever made!</small>
            <Form onSubmit={handleSubmit}> 
            <div>
            <label>
                Enter your email.
                <Field type="text" name="username" placeholder="Email" />
                { touched.username && errors.username && <small>{errors.username}</small> }
            </label>
            </div>
            <div>
            <label>
                Enter your password.
                <Field type="password" name="password" placeholder="Password" />
                { touched.password && errors.password && <small>{errors.password}</small>}
            </label>
            </div>
            <div>
            <button className="aBtn">Login</button>
            </div>
            </Form>

            <NavLink to='/'>Return to home.</NavLink>
        </div>
        <small>Copyright (c) 2019 Build-Week-Org-Chart</small>
    </div>
)

const FormikLoginForm = withFormik({
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
        axios.post("https://lambda-practice-db.herokuapp.com/api/auth/login", values)
          .then(res => {
            localStorage.setItem('token', res.data.token);
            // console.log(props);
            props.props.history.push('/dashboard');
            // console.log('Here', res.data);
        //   setStatus(res.data);
        
        })
        
        .catch(err => console.log(err.response));
    }
//   handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    
    
//   }
})(LoginForm);

export default FormikLoginForm;

render(<Router><FormikLoginForm /></Router>, document.getElementById('root') )
