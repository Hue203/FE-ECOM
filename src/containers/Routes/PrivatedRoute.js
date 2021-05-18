import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivatedRoute = ({ ...rest }) => {
  const isAuthenticated = false;
  if (isAuthenticated) return <Route {...rest} />;
  return <Redirect to="/" />;
};

export default PrivatedRoute;
