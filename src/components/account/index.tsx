import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import SignUp from './SignUp';

function RouteAuth() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}/signup`} component={SignUp} />
            <Route exact path={`${path}/forgotpassword`} component={ForgotPassword} />
            <Route exact path={`${path}`} component={Login} />
        </Switch>
    )
}

export default RouteAuth;
