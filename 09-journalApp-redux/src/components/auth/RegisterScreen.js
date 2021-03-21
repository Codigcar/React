import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

    const [formValues, handleInputChange ] = useForm({
        name:'',
        email:'',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, password2);
    }


    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>
                <input    value={ name }        onChange={ handleInputChange } name="name"             className="auth__input" type="text" placeholder="name"  autoComplete="off" />
                <input    value={ email }       onChange={ handleInputChange } name="email"            className="auth__input" type="text" placeholder="email"  autoComplete="off" />
                <input    value={ password }    onChange={ handleInputChange } name="password"         className="auth__input" type="password" placeholder="password"  />
                <input    value={ password2 }   onChange={ handleInputChange } name="password2"        className="auth__input" type="password" placeholder="confirm password"  />

                <button type="submit" className="btn btn-primary btn-block mb-5"> Register </button>

                <Link to="/auth/login" className="link"> Already registered? </Link>

            </form>
        </>
    )
}
