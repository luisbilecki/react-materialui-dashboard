import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Pages
import SignInPage from '../components/SignInPage';
import SignUpPage from '../components/SignUpPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import NotFoundPage from '../components/NotFoundPage';

// Routes handler
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={SignInPage} exact />
        <PublicRoute path="/signup" component={SignUpPage} exact />
        <PublicRoute path="/forgotpassword" component={ForgotPasswordPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
