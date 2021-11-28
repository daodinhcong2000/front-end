import routes from './app/seller/routes'
import { Router, Switch, Route } from 'react-router-dom'

import getHistory from './helpers/rounting/getHistory'

import HomePage from './app/home/HomePage'
import seller from './app/seller/seller'
import AdminPage from './app/admin/components/AdminPage'
import './scss/style.scss'
const App = () => {
  // const { location } = getHistory()

  return (
      <Router history={getHistory()}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          {routes.map((route, idx) => {
            return (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  component={seller} 
                 />
              )}
            )
          }
          <Route exact path='/admin' component={AdminPage} />
        </Switch>
      </Router>
  )
}

export default App