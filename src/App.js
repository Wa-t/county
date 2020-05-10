import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ScrollTop from './component/scrpllToTop';
import AuthorizedRoute from './router/AuthorizedRoute';
import AppLayout from './AppLayout';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollTop>
        <Switch>
          <Route path='/auth' component={() => null} />
          <AuthorizedRoute path='/' component={AppLayout} />
          <Redirect to='/auth' />
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default App;
