import React from "react";
import { render } from 'react-dom';
import { withFormik, Form, Field } from "formik";

const VactionForm = ({

}) => (
    <div>
        <h3>Vacation Form</h3>
        <Form>
            <label>
                What dates do you need to take off?
                <Field type="text" name="vacationDates" placeholder="May 15th - June 2nd"/>
            </label>
            <label>
                What reason do you have for needing a vacation?
                <Field type="text" name="vacationReason" placeholder="Won free tickets to Tibet"/>
            </label>
            <label>
                Need to meet with you manager before you leave?
                <Field type="checkbox" name="requestMeeting"/>
            </label>
            <button type="submit">Submit!</button>
        </Form>
    </div>

)  
const FormikVactionForm = withFormik ({
    mapPropsToValues({ vacationDates, vacationReason, requestMeeting}) {
        return {
            vacationDates: vacationDates || "",
            vacationReason: vacationReason || '',
            requestMeeting:  requestMeeting || "",
        }
    }
})(VactionForm)

render(<FormikVactionForm />, document.getElementById('root'))
export default FormikVactionForm;

