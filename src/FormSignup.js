import React from 'react'

const FormSignup = () => {
    return (
        <div className="form-content-right">
        <form className="form">
            <h1>Get started today! Create your account.</h1>
            <div className="form-inputs">
                <label htmlFor="Username" 
                className="form-label">
                    <input type="text" name="username"
                    className="form-input"/>
                </label>
            </div>
        </form>
        </div>
    );
};

export default FormSignup
