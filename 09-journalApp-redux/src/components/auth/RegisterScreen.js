import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

// npm i validator   
import validator from 'validator';


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
        
        if( isFormValid() ) {
            console.log(name, email, password, password2);
        } 

    }

    const isFormValid = () => {
        if( name.trim().length === 0) {
            console.log('Name is required');
            return false;
        } else if ( !validator.isEmail( email )) {
            // npm i validator 
            console.log('Email is not valid');
            return false;
        } else if ( password !== password2 || password.length < 5  ){
            console.log('Password should be at least 6 characters and match each other');
            return false;
        }
        return true;

    }


    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                <div className="auth__alert-error">Error</div>

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
