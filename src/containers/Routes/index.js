import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import PublicLayout from "../layouts/PublicLayout";
import PrivateRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute path="/admin" component={AdminLayout} />
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
