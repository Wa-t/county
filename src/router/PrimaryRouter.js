import React, { Component } from 'react';
import routes from './routerConfig';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';
import RouteWithSubRoutes from './RouterDom';

class PrimaryRouter extends Component {
  constructor() {
    super();
    this.state = {
      routes: []
    };
    this.role = [];
  }

  componentDidMount() {
    let copy = [...routes];
    this.deepTree(copy)
    this.setState({
      routes: copy
    })
  }

  deepTree = (data) => {
    data.forEach(d => {
      d.show = true;
      if (d.routes) {
        this.deepTree(d.routes);
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          {this.state.routes.map((route, i) => route.show ? <RouteWithSubRoutes key={i} {...route} /> : null)}
        </Switch>
      </React.Fragment>
    )
  }
}

const stateToProps = ({ loggedUserState }) => ({
  userInfo: loggedUserState
})
export default withRouter(connect(stateToProps)(PrimaryRouter));
