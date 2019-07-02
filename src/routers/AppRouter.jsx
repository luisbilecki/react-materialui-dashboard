import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import IndexPage from '../components/IndexPage';

import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={IndexPage} exact />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
