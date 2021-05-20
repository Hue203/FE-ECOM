import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux/actions/product.actions";
import { routeActions } from "../../redux/actions/route.actions";
import { useHistory, useParams } from "react-router-dom";
import {
  Container,
  Form,
  ButtonGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const AddEditProductPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    images: "",
  });
  const loading = useSelector((state) => state.product.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const addOrEdit = params.id ? "Add" : "Edit";
  const productId = params.id;
  useEffect(() => {
    if (productId) {
      if (!selectedProduct) {
        dispatch(productActions.getSingleProduct(productId));
      }
      setFormData((formData) => ({
        ...formData,
        name: selectedProduct.name,
        description: selectedProduct.description,
        images: selectedProduct.images,
      }));
    }
  }, [productId, selectedProduct, dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price, images } = formData;
    if (addOrEdit === "Add") {
      dispatch(
        productActions.createNewProduct(name, description, price, images)
      );
    } else if (addOrEdit === "Edit") {
      dispatch(
        productActions.updateProduct(productId, name, description, price)
      );
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.tartget.value],
    });
  };
  const handleCancel = () => {
    history.goBack();
  };
  const handleDelete = () => {
    dispatch(productActions.deleteProduct(selectedProduct._id, "/"));
  };
  useEffect(() => {
    if (redirectTo) {
      if (redirectTo === "__GO_BACK__") {
        history.goBack();
        dispatch(routeActions.removeRedirectTo());
      } else {
        history.push(redirectTo);
        dispatch(routeActions.removeRedirectTo());
      }
    }
  }, [redirectTo, dispatch, history]);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <div className="text-center mb-3">
                <h1 className="text-primary">{addOrEdit} Product</h1>
                <p className="lead">
                  <i className="fas fa-user" />
                </p>
              </div>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  required
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Images"
                  required
                  name="images"
                  value={formData.images}
                  onChange={handleChange}
                />
              </Form.Group>
              <ButtonGroup className="d-flex mb-3">
                {loading ? (
                  <Button
                    className="mr-3"
                    variant="primary"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Submitting...
                  </Button>
                ) : (
                  <Button className="mr-3" type="submit" variant="primary">
                    Submit
                  </Button>
                )}
                <Button
                  variant="light"
                  onClick={handleCancel}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </ButtonGroup>
              {addOrEdit === "Edit" && (
                <ButtonGroup className="d-flex">
                  <Button
                    variant="danger"
                    onClick={handleDelete}
                    disabled={loading}
                  >
                    Delete Product
                  </Button>
                </ButtonGroup>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddEditProductPage;
