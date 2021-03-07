import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'

import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { AboutScreen } from './AboutScreen';
import { Navbar } from './Navbar';
import { Error404 } from './Error404';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ HomeScreen } />
                    <Route exact path="/about" component={ AboutScreen } />
                    <Route exact path="/login" component={ LoginScreen } />
                    
                    {/* Redirecciones x default otro */}

                    {/* <Redirect to="/" /> */}
                    <Route  component={ Error404 } />
                </Switch>
            </div>
        </Router>
    )
}
