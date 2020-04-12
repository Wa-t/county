import React from 'react'
import { Switch, withRouter } from 'react-router-dom'
import RouteWithSubRoutes from './RouterDom'

const PassRouter = (props) => (
  <React.Fragment>
    <div className='pass-router'>
      <Switch>
        {props.routes.map((route, i) => route.show ? <RouteWithSubRoutes key={i} {...route} /> : '')}
      </Switch>
    </div>
  </React.Fragment>
)

export default withRouter(PassRouter)
