import { Router, Switch, Route, Redirect } from 'react-router-dom'
import getHistory from './helpers/rounting/getHistory'

import Home from './app/home/Home'
import Search from './app/home/Search'
import Product from './app/home/Product'
import Cart from './app/home/Cart'
import Shop from './app/home/Shop'

import Seller from './app/seller/Seller'
import Admin from './app/admin/Admin'

const App = () => {
  return (
    <Router history={getHistory()}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/shop" component={Shop} />
        <Route path="/product" component={Product} />
        <Route path="/search" component={Search} />
        <Route path="/seller" component={Seller} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  )
}

export default App
