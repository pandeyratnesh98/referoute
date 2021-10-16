import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Home from "./core/Home";
import Profile from "./core/Profile";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/myprofile" component={Profile} />
      </Switch>
    </div>
  );
};

export default MainRouter;
