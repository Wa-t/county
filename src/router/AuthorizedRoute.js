import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class AuthorizedRoute extends Component {
  render() {
    let { component: Component, logged, ...rest } = this.props;
    // TODO: 默认为 true, 后期需要修改
    logged = true;
    return (
      <Route
        {...rest}
        render={props => {
          return logged
            ? (
              <Component {...props} />
            )
            : (
              <Redirect to={{pathname: '/auth/login', state: { from: props.location}}} />
            );
        }}
      />
    );
  }
}

const stateToProps = ({ loggedUserState }) => ({
  pending: loggedUserState.pending,
  logged: loggedUserState.logged
});

export default withRouter(connect()(AuthorizedRoute));
