import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

function Form() {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="img/img-2." alt="" className="form-img"/>
            </div>
        </div>
        
        {!isSubmitted ? <FormSignup submitForm=
        {submitForm} /> : <FormSuccess />}
       
    );
};

export default Form
