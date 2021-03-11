import React, { useContext } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import RouteAuth from './components/account';
import { AuthContext, AuthProvider } from './context/authContext';
import {RHBooks} from './components/allBooks/RHBooks';
import DashBoard from './components/DashBoard';
import EmailConfirm from './components/account/EmailConfirm';
import ConfirmEmail from './components/account/ConfirmEmail';
import ResetPassword from './components/account/ResetPassword';
function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/account" component={RouteAuth} />
        <Route path="/emailconfirm" component={EmailConfirm} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route path="/confirmemail" component={ConfirmEmail} />
        <UserRoute>
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/rh-books" component={RHBooks} />
        </UserRoute>
      </Switch>
    </AuthProvider>
  );
}

const UserRoute = ({ children, ...rest }: any) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() => 
        isAuthenticated() ? (
          [children]
        ) : (
          <Redirect to='/account' />
        )
      }
    >
    </Route>
  )
}

export default App;
