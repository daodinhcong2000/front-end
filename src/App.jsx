// import './App.css'

import homeRoutes from "./app/home/routes";
import sellerRoutes from "./app/seller/routes";
import { Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import getHistory from "./helpers/rounting/getHistory";

import Home from "./app/home/";
import seller from "./app/seller/seller";
import AdminPage from "./app/admin/components/AdminPage";
import "./scss/style.scss";
const App = () => {
  // const { location } = getHistory()
  const [demo, setDemo] = useState(false);

  return (
    <Router history={getHistory()}>
      <Switch>
        <Route exact path='/' component={Home} />
        {homeRoutes.map((route, index) => {
          const { path, exact, component } = route
          return <Route key={`home-${index}`} path={path} exact={exact} component={component} />
        })}

        {sellerRoutes.map((route, idx) => {
          return (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              component={seller}
            />
          );
        })}
        <Route exact path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
};

export default App;
