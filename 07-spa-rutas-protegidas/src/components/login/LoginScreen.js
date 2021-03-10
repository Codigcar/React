import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleClick = () => {
        // Puede regresar a la pagina anterior
        history.push('/');
        // No se puede regresar a la pagina anterior porque lo elimina
        // history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />

            <button className="btn btn-primary" onClick={ handleClick }>
                Login
            </button>
        </div>
    )
}
