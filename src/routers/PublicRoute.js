import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoute = ({ 
  isAuthenticated, 
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    !isAuthenticated ? (
      <div>
        <h1>Expensify</h1>
        <p>Press Login to log into the Expensify App</p>
        <Component {...props} />
      </div>
    ) : (
      <Redirect to='/dashboard' />
    )
  )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
