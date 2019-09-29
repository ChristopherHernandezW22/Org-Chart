import React from 'react';
import { render } from 'react-dom'
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import SearchForm from '../cardList/employeeList';
const DashboardHeader = () => {

    return (
        <div className="headerDiv">
            <div className="headerItems">
                <div>
                    {/* title */}
                    <h2>Streemly</h2>
                </div>
                <div>
                    {/* Add Employee Form */}
                    
                    <NavLink to="/addemployee"> <button className="headerButtons" >Add Employee</button></NavLink>
                </div>
                <div>
                    {/* Request Form */}
                    <button className="headerButtons">Submit Form</button>
                </div>
                <div>
                    {/* Search Form (inactive */}

                </div>
                <div>
                    <a href="/"><button className="headerButtons">Logout</button></a>
                </div>
            </div>
        </div>
    )
}

render(<Router><DashboardHeader /></Router>, document.getElementById('root'))

export default DashboardHeader