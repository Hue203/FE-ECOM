import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ ...rest }) => {
  const isAuthenticated = false;
  if (isAuthenticated) return <Route {...rest} />;
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
