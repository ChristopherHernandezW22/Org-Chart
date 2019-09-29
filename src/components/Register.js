import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ props }) => {

    const [creds, setCreds] = useState({username: "", password: ""});
    const handleChange = event => {
        setCreds({...creds, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('clicked');
        axios.post('https://org-chart-lambda.herokuapp.com/api/auth/register', creds)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload)
                props.push("/login");
            })
            .catch(err => console.group(err.response));
    };
};

export default Register;