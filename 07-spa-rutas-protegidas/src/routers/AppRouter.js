import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

    const { user }  = useContext( AuthContext );
    // console.log(user);
    
    return (
        <Router>
        <div>
            {/* <Navbar /> */}

           <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <PrivateRoute isAuthenticated={ user.logged }  component={ DashboardRoutes } path="/" />
           </Switch>
        </div>
        </Router>
    )
}
