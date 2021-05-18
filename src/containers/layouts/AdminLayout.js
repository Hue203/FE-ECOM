import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";
import ProductDetailPage from "../Pages/DetailPage";
import AddEditProductPage from "../Admin /AddEditProductPage";

import AddEditOrderPage from "containers/Admin /AddEditOrderPage";
import ProfilePage from "containers/Admin /ProfilePage";
import SideMenu from "containers/Admin /SideMenu";
import OrderDetailPage from "../Admin /OrderDetailPage";
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
                path="/admin/order/:id"
                component={OrderDetailPage}
              />
              <Route
                exact
                path="/admin/order/add"
                component={AddEditOrderPage}
              />
              <Route
                exact
                path="/admin/order/:id/update"
                component={AddEditOrderPage}
              />

              <Route
                exact
                path="/admin/product/:id"
                component={ProductDetailPage}
              />
              <Route
                exact
                path="/admin/product/add"
                component={AddEditProductPage}
              />
              <Route
                exact
                path="/admin/product/:id/update"
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
