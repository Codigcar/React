// rafc
import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormwithCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    // });

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    // const handleInputChange = ( e ) => {
    //     const { target } = e;
    //     setFormState({
    //         ...formState,
    //         [ target.name ]: target.value
    //     });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        
    }

    return (
        <form onSubmit = { handleSubmit } >
            <h1>FormwithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="nombre:"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="mail@example.com:"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="***"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />

            </div>

            <button type="submit" className="btn btn-primary">
                Save
            </button>
        </form>
    )
}
