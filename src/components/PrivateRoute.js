import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SignupForm from './onboarding/signupForm';
import LoginForm from './onboarding/loginForm';

/*
Private Route Rules:
1. Same API as <Route />.
2. Renders a <Route /> & passes all the props through to it.
3. Checks for user authentication. If authenticated, render "component" prop. If not, redirect the user to login.
*/

const PrivateRoute = ({component: Component, ...rest}) => {
    // const Component = props.component
    return (
        <Route {...rest}  render={() => {
            if (localStorage.getItem('token')) {
                // if token is in localstorage, render given component.
                return <Component />
            } else {
                return <Redirect to="/login" />
            }
        }}/>
    );
}

// const PrivateRoute = ({component: Component, ...rest}) => {
//     return <Route {...rest} render={props => {
//       if (localStorage.getItem('token')) {
//         return <Component {...props} />;
//       } else {
//         return <Redirect to="/login" />;
//       }
//     }} />;
//   };

export default PrivateRoute;