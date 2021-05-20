import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux/actions";
import { Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { Col, Row, Badge } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.product.selectedProduct);
  const loading = useSelector((state) => state.product.loading);
  const history = useHistory();

  useEffect(() => {
    if (params?.id) {
      dispatch(productActions.getSingleProduct(params.id));
    }
  }, [dispatch, params]);

  const handleGoBackClick = (e) => {
    history.goBack();
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <Button onClick={handleGoBackClick}>
          <FontAwesomeIcon icon="chevron-left" size="1x" /> Back
        </Button>
      </div>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <>
          {singleProduct && (
            <>
              <Row>
                <Col>
                  <div className="product-card" data-toggle="tooltip">
                    <img
                      src={singleProduct.product.images[0].imageUrl}
                      alt="product-img"
                      className="re-size-img-single"
                    />

                    <div className="content">
                      <div>
                        <ul>
                          {
                            <strong>
                              <p>
                                <Badge className="phonename">
                                  <h1>{singleProduct.product.name}</h1>
                                </Badge>
                              </p>
                            </strong>
                          }
                        </ul>
                      </div>
                      <div>
                        <ul>
                          {
                            <strong>
                              <h5>{singleProduct.product.description}</h5>
                            </strong>
                          }
                        </ul>
                      </div>
                      <div>
                        <ul>
                          {<p>{`Price: $ ${singleProduct.product.price}`}</p>}
                          <p>Quantity: 10</p>
                          <Button variant="warning"> Add to Card </Button>
                        </ul>
                      </div>

                      <div>
                        <ul>
                          <ul>Detail's product information</ul>
                          <h1>Review</h1>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </>
      )}
    </>
  );
};

export default DetailPage;
