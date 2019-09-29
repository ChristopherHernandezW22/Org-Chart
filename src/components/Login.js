import React, { useState } from "react";
import axiosWithAuth from '../utilities/AxiosWithAuth'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            // redirecting to the mainpage/dashboard ???
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div></div>
        )
    };
}

export default Login;