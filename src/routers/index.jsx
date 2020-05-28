import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import { userHasLogin } from '../hoc/userHasLogin'
import ProductPage from '../pages/ProductPage'

const routers = () => {
    return (
        <Router>
            <Switch>
                <Route 
                    path='/'
                    exact= { true }
                    component= { LoginPage }
                />
                <Route
                    path='/productPage'
                    exact= { true }
                    component= { userHasLogin( ProductPage ) }
                />
            </Switch>
        </Router>
    )
}

export default routers
