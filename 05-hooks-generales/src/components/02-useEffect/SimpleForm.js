// rafc
import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // puede usarse para escuchar cambios especificos en alguna parte dell State o app
    // ejem: solo ejecuta useEffect cuando cambia el "name"
    useEffect(() => {
       console.log('name cambió');
    }, [name])

    useEffect(() => {
        console.log('email cambió');
     }, [email])

    const handleInputChange = ( e ) => {
        // console.log(e.target);
        const { target } = e;
        // console.log(target.value);

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

            </div>
        </>
    )
}
