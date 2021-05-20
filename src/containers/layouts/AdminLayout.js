import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";

import AddEditProductPage from "../Admin /AddEditProductPage";

import ProfilePage from "containers/Admin /ProfilePage";
import SideMenu from "containers/Admin /SideMenu";

import OrderPage from "../Admin /OrderPage";

import PublicNavbar from "containers/Pages/PublicNavbar";
import AlertMsg from "components/AlertMsg";

const AdminLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid>
        <Row>
          <SideMenu />
          <Col md={9} lg={10}>
            <AlertMsg />
            <Switch>
              <Route exact path="/admin/profile" component={ProfilePage} />
              <Route exact path="/admin/order" component={OrderPage} />
              <Route
                exact
                path="/admin/product"
                component={AddEditProductPage}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLayout;
