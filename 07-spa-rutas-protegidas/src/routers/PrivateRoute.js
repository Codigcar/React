import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from "react-router"



export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest}) => {

    // guardar la ultima ruta si el token vence
    console.log(rest.location.pathname);
    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        // <Route exact path="/marvel" component={ MarvelScreen } />
        <Route { ...rest } component={ props => isAuthenticated ? <Component { ...props } /> : <Redirect to="/login" />  } />
    )
} 

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}