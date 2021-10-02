import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRouterConfig } from "../Config/AuthRouterConfig";

const AppAuthRouter = () => {
  return (
    <Switch>
      {AuthRouterConfig.map((item, index) => {
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

export default AppAuthRouter;
