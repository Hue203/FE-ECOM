import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/profile"
            activeClassName="active"
            strict={true}
          >
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/order"
            activeClassName="active"
            strict={true}
          >
            Orders
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/order"
            activeClassName="active"
            strict={true}
          >
            Payments
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/product"
            activeClassName="active"
            strict={true}
          >
            Product
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/admin/messenger"
            activeClassName="active"
            strict={true}
          >
            Messenger
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default SideMenu;
