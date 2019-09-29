import React from 'react';
import { NavLink } from 'react-router-dom';

const landing = () => {

    return (
            <div className='landingDiv'>
                <div className="landingTitle">
                <h1>Streemly</h1>
                </div>
                <div className='landingText'>
                    <p><span>Streemly</span> is the best way to manage HR requests and eliminate organization latency.</p>
                </div>
                <div className='landingButtons'>
                <NavLink to='signup'><button className="aBtn">Signup</button></NavLink>
                <NavLink to='login'><button className="aBtn">Login</button></NavLink>
                </div>
                <small>Copyright (c) 2019 Build-Week-Org-Chart</small>
            </div>

              
                
    )       
}

export default landing;