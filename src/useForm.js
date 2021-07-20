import { useState, useEffect } from "react";

const useForm = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({})


    const handleChange = event => {
        const{ name, value} = event.target
        setValues({
        ...values,
        [name]: value
        })
    }

    return {handleChange, values};
}

export default useForm;