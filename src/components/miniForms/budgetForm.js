import React from "react";
import { render } from 'react-dom';
import { withFormik, Form, Field } from "formik";

const BudgetForm = ({

}) => (
    <div>
        <h3>Budget Request</h3>
        <Form>
            <label>
             Select Department
                <Field component="select" name="requestName">
                    <option value="dprHr">Human Resources</option>
                    <option value="drpAc">Accouting</option>
                    <option value="dprEn">Engineering</option>
                    <option value="dprRe">Recruitment</option>
                    <option value="dprMa">Marketing</option>
                </Field> 
               
            </label>
            <label>
                Budget Value
                <Field type="text" name="budgetValue"placeholder="$100,000"/>
            </label>
            <label>
                Budget Deadline
                <Field type="text" name="budgetTime" placeholder="December 31st"/>
            </label>
            <label>
                Information
                <Field type="textarea" name="budgetInfo" placeholder="Extra info"/>
            </label>
            <button type="submit">Submit!</button>
        </Form>
    </div>

)  
const FormikBudgetForm = withFormik ({
    mapPropsToValues({ budgetValue, budgetTime, budgetInfo}) {
        return {
            budgetValue: budgetValue || "",
            budgetTime: budgetTime || '',
            budgetInfo:  budgetInfo || "",
        }
    }
})(BudgetForm)

render(<FormikBudgetForm />, document.getElementById('root'))
export default FormikBudgetForm;

