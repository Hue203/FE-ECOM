import React from "react";
import { Row, Col, Badge } from "react-bootstrap";

const ProductCard = ({ product, handleClick }) => {
  return (
    <>
      <div onClick={() => handleClick(product._id)}>
        <div className="flex">
          <Row>
            <Col>
              <div className="product-card" data-toggle="tooltip">
                {
                  <img
                    src={product.images[0].imageUrl}
                    alt="product-img"
                    className="re-size-img"
                  />
                }
                <div className="content">
                  <div>
                    <ul>
                      {
                        <strong>
                          <p>
                            <Badge className="phonename">{product.name}</Badge>
                          </p>
                        </strong>
                      }
                    </ul>
                  </div>
                  <div>
                    <ul>{<p>{`$ ${product.price}`}</p>}</ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
