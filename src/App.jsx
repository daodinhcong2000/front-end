import './scss/style.scss'

import { Router, Switch, Route, Redirect } from 'react-router-dom'
import getHistory from './helpers/rounting/getHistory'

import Home from './app/home/Home'
import Products from './app/home/Products'
import Shops from './app/home/Shops'
import Seller from './app/seller/Seller'
import Admin from './app/admin/Admin'

const App = () => {
  return (
    <Router history={getHistory()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shops/:shopId" component={Shops} />
        <Route path="/products/:productId" component={Products} />
        {/* <Route exact path='/carts' component={''}/> */}

        <Route path="/seller" component={Seller} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  )
}

export default App
