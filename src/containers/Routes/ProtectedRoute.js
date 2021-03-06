import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) return <Route {...rest} />;
  delete rest.component;
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
