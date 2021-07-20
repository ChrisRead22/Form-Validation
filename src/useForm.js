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
        setValues({
        ...values,
        event.target.name
        })
    }
}