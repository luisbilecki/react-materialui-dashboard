import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Pages
import SignInPage from '../components/SignInPage';
import SignUpPage from '../components/SignUpPage';
import NotFoundPage from '../components/NotFoundPage';

// Routes handler
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={SignInPage} exact />
        <PublicRoute path="/signUp" component={SignUpPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
