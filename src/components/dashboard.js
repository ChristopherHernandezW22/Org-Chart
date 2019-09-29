import React from "react"
import {render} from 'react-dom'
import DashboardHeader from "./dashboardComponents/dashboardHeader"
import CharaterList from './cardList/employeeList'
import { BrowserRouter as Router } from 'react-router-dom'; 

const Dashboard = () => {   

    return(
        <div>
        
        <DashboardHeader />

            <h4 className="employeeTitle">Employee List</h4>
            {/* <div className="cardContainer"> */}
            <CharaterList />
            {/* </ div> */}
        </div>
    )
};


render(<Router><Dashboard /></Router>, document.getElementById('root'))
export default Dashboard