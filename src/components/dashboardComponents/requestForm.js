import React from "react";
import { render } from 'react-dom';
import { withFormik, Form, Field } from "formik";
// import * as Yup from 'yup';
// import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom'; 

const RequestForm = ({
    
}) => (
    <div>
    <Form>
        <Field component="select" name="requestName">
            <option value="vacationRequest">Vacation Time</option>
            <option value="proposalsRequest">Project Proposal</option>
            <option value="budgetRequest">Budget Request</option>
        </Field>
    </Form>
    </div>
)
const FormikRequestForm = withFormik({
    mapPropsToValues({ requestName }) {
        return{
            requestName: requestName || 'vacationRequest',
        }
    }
})(RequestForm)



render(<FormikRequestForm />, document.getElementById('root') )
export default FormikRequestForm;