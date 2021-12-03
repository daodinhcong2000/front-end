import "./scss/style.scss";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import getHistory from "./helpers/rounting/getHistory";

import Home from "./app/home/Home";
import Products from "./app/home/Products"
import Shops from "./app/home/Shops"
import seller from "./app/seller/seller";
import AdminPage from "./app/admin/components/AdminPage";

import sellerRoutes from "./app/seller/routes";

import { roles } from "./services/checkRole";
import PrivateRoute from "./helpers/PrivateRoute";

const App = () => {
  // const { location } = getHistory()
  const dispatch = useDispatch()

  const checkSeller = roles("seller");
  return (
    <Router history={getHistory()}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shops/:shopId' component={Shops} />
        <Route exact path='/products/:productId' component={Products} />

        <PrivateRoute isAuthenticated={!checkSeller}>
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
        </PrivateRoute>

        <Route exact path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
};

export default App;
