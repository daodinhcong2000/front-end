import { useEffect, useState } from "react";
import homeRoutes from "./app/home/routes";
import sellerRoutes from "./app/seller/routes";
import adminRoutes from "./app/admin/routes";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import getHistory from "./helpers/rounting/getHistory";

import Home from "./app/home/";
import seller from "./app/seller/seller";
import admin from "./app/admin/admin"
import "./scss/style.scss";
import { getRoles } from "./services/getRoles";
import PrivateRoute from "./helpers/PrivateRoute";
const App = () => {
  // const { location } = getHistory()

  const [roles, setRoles] = useState(["seller", "admin"]);

  useEffect(() => {
    const _setRoles = async () => {
      const vRoles = await getRoles();
      setRoles(vRoles);
    };

    _setRoles();
  }, []);

  return (
    <Router history={getHistory()}>
      <Switch>
        <Route exact path="/" component={Home} />
        {homeRoutes.map((route, index) => {
          const { path, exact, component } = route;
          return (
            <Route
              key={`home-${index}`}
              path={path}
              exact={exact}
              component={component}
            />
          );
        })}
        {sellerRoutes.map((route, idx) => {
          return (
                roles.includes("seller") ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    component={seller}
                  />
                ) : (
                  <Redirect to="/" />
                )
          );
        })}
        {adminRoutes.map((route, idx) => {
          return (
            roles.includes("admin") ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    component={admin}
                  />
                ) : (
                  <Redirect to="/" />
                )
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
