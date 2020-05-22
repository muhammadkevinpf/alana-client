import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import acne from "../../images/products/acne.jpg";
import sensitive from "../../images/products/sensitive.jpg";
import antiaging from "../../images/products/antiaging.jpg";
import brightening from "../../images/products/brightening.jpg";
import bodycare from "../../images/products/bodycare.jpg";

const products = [
  {
    image: acne,
    linkTo: "/products/acne",
    body: "ACNE",
  },
  {
    image: brightening,
    linkTo: "/products/brightening",
    body: "BRIGHTENING",
  },
  {
    image: antiaging,
    linkTo: "/products/antiaging",
    body: "ANTI AGING",
  },
  {
    image: sensitive,
    linkTo: "/products/sensitive",
    body: "SENSITIVE",
  },
  {
    image: bodycare,
    linkTo: "/products/bodycare",
    body: "BODY CARE",
  },
];

const Products = () => {
  return (
    <div className="p-5">
      <h3 className="text-heading">Our Product</h3>
      <Row className="text-center">
        {products.map((product, index) => {
          let column;

          index === 3 || index === 4 ? (column = 6) : (column = 4);
          return (
            <Col
              lg={column}
              md={column}
              sm={6}
              xs={6}
              key={index}
              className={`mt-5 ${index === 3 ? "p-left" : ""}${
                index === 4 ? "p-right" : ""
              }`}
            >
              <Link to={product.linkTo}>
                <img
                  src={product.image}
                  className="img-circle"
                  alt={product.body}
                />
                <p className="mt-3 link-text text-service">{product.body}</p>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Products;
