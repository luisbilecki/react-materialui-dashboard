import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

// Pages
import SignInPage from '../containers/Pages/SignInPage';
import SignUpPage from '../containers/Pages/SignUpPage';
import ForgotPasswordPage from '../containers/Pages/ForgotPasswordPage';
import NotFoundPage from '../containers/Pages/NotFoundPage';
import DashboardPage from '../containers/App/App';

// Routes handler
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
    <div>
      <Switch>
        <PublicRoute path="/" component={SignInPage} exact />
        <PublicRoute path="/signup" component={SignUpPage} />
        <PublicRoute path="/forgotpassword" component={ForgotPasswordPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
