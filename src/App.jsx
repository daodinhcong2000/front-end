import { useEffect, useState } from 'react'
import homeRoutes from './app/home/routes'
import sellerRoutes from './app/seller/routes'
import adminRoutes from './app/admin/routes'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import getHistory from './helpers/rounting/getHistory'

import Home from './app/home/'
import Seller from './app/seller/Seller'
import Admin from './app/admin/Admin'
import './scss/style.scss'
import { getRoles } from './services/getRoles'
import PrivateRoute from './helpers/PrivateRoute'
const App = () => {
  return (
    <Router history={getHistory()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/seller" component={Seller} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </Router>
  )
}

export default App
