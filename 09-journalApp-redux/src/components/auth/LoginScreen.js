import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types'

export const LoginScreen = () => {

    
    const [ formValues, handleInputChange, reset ] = useForm({
        email: 'carlos@gmail.com',
        password: '123123'
    });
    
    const { email, password } = formValues;
    
    // Hook de Redux
    // Esto es para ejecutar las acciones, la accion de login ubicado en "actions>auth"
    // Sin este hook no puedes llamar a las acciones
    // ventaja: hace dispatch de acciones y llamar en cualquier parte
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(email, password);
        // dispatch(
        //     {
        //         type: types.login,
        //         payload: {
        //             uid: 123123,
        //             displayName: 'bbebito'
        //         }
        //     }
        // );


        // syncrono
        // dispatch( login(123123, 'Carlitos') );

        // asyncrono
        dispatch( startLoginEmailPassword(email, password) );
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={ handleLogin }>
                <input className="auth__input"      value={ email }    onChange={ handleInputChange } name="email"       type="text" placeholder="email"  autoComplete="off" />
                <input className="auth__input"      value={ password } onChange={ handleInputChange } name="password"    type="password" placeholder="password"  />
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <hr />
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>

                <Link to="/auth/register" className="link"> Create new account </Link>

            </form>
        </>
    )
}
