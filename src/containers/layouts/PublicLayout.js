import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AlertMsg from "components/AlertMsg";
import NotFoundPage from "components/NotFoundPage";

import DetailPage from "containers/Pages/DetailPage";
import HomePage from "containers/Pages/Homepage";
import LoginPage from "containers/Pages/LoginPage";
import PublicNavbar from "containers/Pages/PublicNavbar";
import RegisterPage from "containers/Pages/RegisterPage";
import ProtectedRoute from "containers/Routes/ProtectedRoute";
import DashboardPage from "containers/Pages/DashboardPage";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container>
        <AlertMsg />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />

          <Route exact path="/product/:id" component={DetailPage} />

          <ProtectedRoute exact path="/user/me" component={DashboardPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
