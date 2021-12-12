import 'antd/dist/antd.css'
import './css_modules/css/all.module.css'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import getHistory from './helpers/rounting/getHistory'

import Home from './app/home/Home'
import Search from './app/home/Search'
import Product from './app/home/Product'
import Cart from './app/home/Cart'
import Order from './app/home/Order'
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
        <Route path="/order" exact component={Order} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/search/:keyword" component={Search} />
        <Route path="/seller" component={Seller} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  )
}

export default App
