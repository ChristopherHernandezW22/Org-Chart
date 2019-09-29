import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import landing from './components/landing';
import './App.css';

import LoginForm from './components/onboarding/loginForm';
import SignupForm from './components/onboarding/signupForm'

import Dashboard from './components/dashboard';
import addEmployeeForm from './components/dashboardComponents/addEmployeeForm'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={landing}/>
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignupForm} />

        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/addemployee' component={addEmployeeForm}/>
       </Router>
    </div>
  );
}

export default App;
