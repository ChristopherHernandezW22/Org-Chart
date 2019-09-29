import React from "react";
import { render } from 'react-dom';
import { withFormik, Form, Field } from "formik";

const ProposalForm = ({
}) => (
    <div>
        <Form>
            <label>
                What is the timeline for the project?
                <Field type="text" name="projectTimeline" placeholder="May 15th - June 2nd"/>
            </label>
            <label>
                What is the project goal?
                <Field type="text" name="projectGoal" placeholder="Project Goal"/>
            </label>
            <label>
                What resources are needed for the project?
                <Field type="text" name="projectResources" placeholder="Resources needed"/>
            </label>
            <label>
                What challenges do you forsee with the project?
                <Field type="text" name="projectChallenges" placeholder="Project challenges"/>
            </label>
            <label>
                Check to meet with manager.
                <Field type="checkbox" name="requestMeeting"/>
            </label>
            <button type="submit">Submit!</button>
        </Form>
    </div>
)  
const FormikProposalForm = withFormik ({
    mapPropsToValues({ projectTimeline, projectGoal, projectResources, projectChallenges, requestMeeting}) {
        return {
            projectTimeline: projectTimeline || "",
            projectGoal: projectGoal || '',
            projectResources: projectResources || "",
            projectChallenges: projectChallenges || "",
            requestMeeting: requestMeeting || "",
        }
    }
})(ProposalForm)
render(<FormikProposalForm />, document.getElementById('root'))
export default FormikProposalForm;