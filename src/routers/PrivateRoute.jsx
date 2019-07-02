import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    )}
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
