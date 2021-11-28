import { Router, Switch, Route } from 'react-router-dom'

import getHistory from './helpers/rounting/getHistory'

import HomePage from './app/home/HomePage'
import SellerPage from './app/seller/components/SellerPage'
import AdminPage from './app/admin/components/AdminPage'

const App = () => {
  // const { location } = getHistory()

  return (
      <Router history={getHistory()}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/seller' component={SellerPage} />
          <Route exact path='/admin' component={AdminPage} />
        </Switch>
      </Router>
  )
}

export default App