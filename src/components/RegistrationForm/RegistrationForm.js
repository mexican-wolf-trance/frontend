import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import "./RegistrationForm.css"
import { register } from '../../Helpers/RegistrationHelper'

function RegistrationForm(props)
{
    const [state, setState] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        successMessage: null
    })

    const handleChange = (e) =>
    {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) =>
    {
        e.preventDefault();
        if (state.password === state.confirmPassword)
        { sendDetailsToServer() }
        else { props.showError('Passwords do not match'); }
    }

    const redirectToLogin = () =>
    {
        props.history.push('/login');
        props.updateTitle('Login');
    }

    const sendDetailsToServer = () =>
    {
        if (state.username.length && state.password.length)
        {
            props.showError(null);
            const payload =
            {
                "username": state.username,
                "password": state.password,
            }
            //TODO:
            //need to add custom payload for my own purposes
            //USE PROMISES OR WHATEVER
            const success = register(payload)
            if (success)
            {
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': 'Login successful. Redirecting to home page..'
                    }))
                    redirectToLogin();
                    props.showError(null)
            }
        }
        else { props.showError('Please enter valid username and password') }

    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label /*htmlFor="exampleInputEmail1"*/>Username</label>
                    <input type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="emailHelp"
                        placeholder="Enter username"
                        value={state.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
                <div className="form-group text-center">
                    <label><br></br>Already have an account?</label>
                    <span className="form-group text-center click-here" onClick={() => redirectToLogin()}><br></br>CLICK HERE</span>

                </div>
            </form>
        </div>
    )
}

export default withRouter(RegistrationForm);