import React from 'react'

const FormSignup = () => {
    return (
        <div className="form-content-right">
        <form className="form">
            <h1>Get started today! Create your account.</h1>
            <div className="form-inputs">
                <label htmlFor="Username" 
                className="form-label">
                    Username
                </label>
                <input 
                    type="text" 
                    name="username"
                    className="form-input" 
                    placeholder="Enter username"
                />
            </div>
            <div className="form-inputs">
                <label htmlFor="email" 
                className="form-label">
                </label>
                <input 
                    type="email" 
                    name="email"
                    className="form-input" 
                    placeholder="Enter your email"
                />
            </div>
        </form>
        </div>
    );
};

export default FormSignup
