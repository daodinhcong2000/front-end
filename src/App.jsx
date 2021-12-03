import { Router, Switch, Route } from 'react-router-dom'
import getHistory from './helpers/rounting/getHistory'

import Home from './app/home/'
import Seller from './app/seller/Seller'
import Admin from './app/admin/Admin'
import './scss/style.scss'
const App = () => {
  return (
    <Router history={getHistory()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/seller" component={Seller} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  )
}

export default App
