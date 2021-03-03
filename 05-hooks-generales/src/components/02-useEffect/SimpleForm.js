// rafc
import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
       console.log('useEffect');
    })

    const handleInputChange = ( e ) => {
        // console.log(e.target);
        const { target } = e;
        // console.log(target.name);

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre:"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

            </div>
        </>
    )
}
