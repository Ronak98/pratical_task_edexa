import React from "react";
import { Switch, Route } from "react-router-dom";
import { RouterConfig } from "../Config/RouterConfig";

const AppRouter = () => {
  return (
    <Switch>
      {RouterConfig.map((item, index) => {
        var exact = true;
        if (item.errorpage === true) {
          exact = false;
        }
        return (
          <Route
            key={index}
            exact={exact}
            path={item.path}
            component={item.component}
          />
        );
      })}
    </Switch>
  );
};

export default AppRouter;
