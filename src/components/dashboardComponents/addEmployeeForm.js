import React from "react";
import { render } from 'react-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

const AddEmployeeForm = ({ errors, touched, handleSubmit }) => (
    <div className="formPage">
    <div className="addEmployeeDiv">
        <h3>Add Author and Quote!</h3>
    <Form onSubmit={handleSubmit}>
        {/* <div className="stack">
        <label>
           Give manager permissions?
            <Field type="checkbox" name="managerPerm" placeholder="Manager Name"/>
        </label>
        </div> */}
        {/* <div className="stack">
        <label>
             Select Department
            <Field component="select" name="addDepartment">
                <option value="dprHr">Human Resources</option>
                <option value="drpAc">Accouting</option>
                <option value="dprEn">Engineering</option>
                <option value="dprRe">Recruitment</option>
                <option value="dprMa">Marketing</option>
            </Field> 
            { touched.addDepartment && errors.addDepartment && <small>{errors.addDepartment}</small> }
        </label>
        </div> */}
        {/* <div className="stack">
        <label>
           Who is their manager
            <Field type="text" name="managerWho" placeholder="Manager Name"/>
            { touched.managerPerm && errors.managerPerm && <small>{errors.managerPerm}</small> }
        </label>
        </div> */}
        <div className="stack">
        <label>
            Author
            <Field type="text" name="author" placeholder="Author name."/>
            { touched.author && errors.author && <small>{errors.author}</small> }

        </label>
        </div>
        <div className="stack">
        <label>
            Quote
            <Field type="text" name="text" placeholder="Enter text."/>
            { touched.text && errors.text && <small>{errors.text}</small> }
        </label>
        </div>
        <div>
            <button className="aBtn" type="submit">Add</button>
        </div>
        <div>
            <NavLink to='/dashboard'>Return To Dashboard</NavLink>
        </div>
        </Form>
        </div>
        
    </div>  
)

const FormikEmployeeForm = withFormik({
    mapPropsToValues({ author, text }) {
        return{
            author: author || '',
            text: text || '',
          };
    },
        validationSchema: Yup.object().shape({
            author: Yup.string().required(),
            text: Yup.string().required(),
    }),

    handleSubmit(values, props) {
        console.log(props);
        axios.post("https://lambda-practice-db.herokuapp.com/api/post", values)
        .then(res => {
          console.log('add new thing here', res.data);
          
            // localStorage.setItem('token', res.data.token)
            console.log(props.props.history);
            props.props.history.push("/dashboard");
        // setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }

})(AddEmployeeForm)



render(<Router><FormikEmployeeForm /></Router>, document.getElementById('root') )
export default FormikEmployeeForm;