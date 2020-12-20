import React, { useState } from 'react';

function useFormValidation(initialState) {
    const [values, setValues] = useState(initialState);

    function handleChange(event) {
        setValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()

        console.log(values)
    }

    return { handleChange, handleSubmit }
}

export default useFormValidation;