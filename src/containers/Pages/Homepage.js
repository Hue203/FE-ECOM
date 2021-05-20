import ProductCard from "components/ProductCard";
import PaginationBar from "components/PaginationBar";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { productActions } from "redux/actions";

const HomePage = () => {
  const [pageNum, setPageNum] = useState(1);
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const totalPageNum = useSelector((state) => state.product.totalPageNum);
 
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(productActions.productsRequest(pageNum));
  }, [dispatch, pageNum]);
  ///chay trong useEffect 1 lan//
  const handleClickOnProduct = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <Container>
      <PaginationBar
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPageNum={totalPageNum}
        loading={loading}
      />
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <>
          {products?.length ? (
            <>
              <Row>
                <Col className="productline">
                  {products.map((product) => (
                    <ProductCard
                      product={product}
                      key={product._id}
                      handleClick={handleClickOnProduct}
                    />
                  ))}
                </Col>
              </Row>
            </>
          ) : (
            <p>There are no Products</p>
          )}
        </>
      )}
    </Container>
  );
};

export default HomePage;
