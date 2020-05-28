import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const routers = () => {
    return (
        <Router>
            <Switch>
                <Route 
                    path='/'
                    exact= { true }
                    component= { LoginPage }
                />
            </Switch>
        </Router>
    )
}

export default routers
