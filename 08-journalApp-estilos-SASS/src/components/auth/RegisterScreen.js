import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form>
                <input className="auth__input" type="text" placeholder="name" name="name" autoComplete="off" />
                <input className="auth__input" type="text" placeholder="email" name="email" autoComplete="off" />
                <input className="auth__input" type="password" placeholder="password" name="password" />
                <input className="auth__input" type="password" placeholder="confirm password" name="password2" />

                <button type="submit" className="btn btn-primary btn-block mb-5"> Register </button>

                <Link to="/auth/login" className="link"> Already registered? </Link>

            </form>
        </>
    )
}
