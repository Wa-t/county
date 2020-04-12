import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const RouteWithSubRoutes = route => {
  return route.redirect === true ? (
    <Redirect path={route.path} to={route.to} />
  ) : (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

export default withRouter(RouteWithSubRoutes);
