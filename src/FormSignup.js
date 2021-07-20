import React from 'react';
import useForm from './useForm';

const FormSignup = () => {
    const {handleChange, values} = useForm();


    return (
        <div className="form-content-right">
        <form className="form">
            <h1>Get started today! Create your account.</h1>
            <div className="form-inputs">
                <label htmlFor="username" 
                className="form-label">
                    Username
                </label>
                <input 
                    id="username"
                    type="text" 
                    name="username"
                    className="form-input" 
                    placeholder="Enter username"
                    value={values.username}
                    onChange={handleChange}
                />
            </div>
            <div className="form-inputs">
                <label htmlFor="email" 
                className="form-label">
                    Email
                </label>
                <input 
                    id="email"
                    type="email" 
                    name="email"
                    className="form-input" 
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-inputs">
                <label htmlFor="password" 
                className="form-label">
                    Password
                </label>
                <input 
                    id="password"
                    type="password" 
                    name="password"
                    className="form-input" 
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <div className="form-inputs">
                <label htmlFor="password2" 
                className="form-label">
                    Confirm Password
                </label>
                <input 
                    id="password2"
                    type="password" 
                    name="password2"
                    className="form-input" 
                    placeholder="Confirm your password"
                    value={values.password2}
                    onChange={handleChange}
                />
            </div>
            <button classname="form-input-btn">Sign Up</button>
            <span classname="form-input-login">Already have an account? 
            <a href="#">login here</a>
            </span>
        </form>
        </div>
    );
};

export default FormSignup
