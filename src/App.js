import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; 
import landing from './components/landing';
import './App.css';

import LoginForm from './components/onboarding/loginForm';
import SignupForm from './components/onboarding/signupForm';
import AuthorQuote from './components/dashboardComponents/NewApi';

import Dashboard from './components/dashboard';
import addEmployeeForm from './components/dashboardComponents/addEmployeeForm';
import EditPost from './components/dashboardComponents/EditPost.js';

const PrivateRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }} />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={landing}/>
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignupForm} />
        <Route path='/edit/:id' component={EditPost} />

        <PrivateRoute path='/dashboard' component={Dashboard}/>
        {/* <Route path='/addemployee' component={addEmployeeForm}/> */}
        
        <Route path='/addemployee' component={AuthorQuote}/>

       </Router>
    </div>
  );
}

export default App;
