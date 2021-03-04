import React, { useState } from 'react'

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState)

    const handleInputchange = (e) => {
        const { target } = e;
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputchange ];
}
