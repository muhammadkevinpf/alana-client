import React, { useEffect, Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import Footer from "../components/layout/Footer";
import ReactSkeleton from "react-loading-skeleton";

import { connect } from "react-redux";
import { getProducts } from "../redux/actions/serviceActions";
import { addToBag } from "../redux/actions/userActions";
const DetailProducts = ({
  service: {
    products: {
      name,
      tagline,
      func,
      skinType,
      price,
      howTo,
      attention,
      ingredients,
      imageUrl,
    },
    loading,
  },
  user: {
    authenticated,
    credentials: { role },
  },
  getProducts,
  addToBag,
}) => {
  let [count, setCount] = useState(1);
  let [show, setShow] = useState(false);
  let history = useHistory();
  let urlProducts = window.location.pathname.split("/")[3];
  useEffect(() => {
    getProducts(urlProducts);
  }, [urlProducts, getProducts]);

  const handleMin = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount((count -= 1));
    }
  };

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  const handlePlus = () => {
    setCount((count += 1));
  };

  const handleAddToBag = () => {
    const productDetails = {
      name,
      imageUrl,
      price,
      quantity: count,
      totalPrice: price * count,
    };
    if (authenticated) {
      setShow(true);
      addToBag(productDetails);
    } else {
      history.push("/login");
    }
  };

  let howto = [];
  let attent = [];

  if (howTo !== undefined) {
    howto = howTo;
  }

  if (attention !== undefined) {
    attent = attention;
  }

  const productMarkUp = !loading ? (
    <Row>
      <Col xs={12} sm={12} md={6} xl={6} className="text-center">
        <img src={imageUrl} alt={name} className="image-service mt-3" />
        <br />

        {role === "member" ? (
          <Fragment>
            <Button variant="link" onClick={handleMin}>
              <span className="font-weight-bold" style={{ fontSize: "24px" }}>
                -
              </span>
            </Button>
            <input
              type="number"
              value={count}
              className="input-number"
              onChange={handleChange}
            />
            <Button variant="link" onClick={handlePlus}>
              <span className="font-weight-bold" style={{ fontSize: "24px" }}>
                +
              </span>
            </Button>
            <br />
            <Button
              variant="danger"
              className="btn-bag"
              onClick={handleAddToBag}
              style={{ width: "200px" }}
            >
              ADD TO BAG
            </Button>
          </Fragment>
        ) : (
          ""
        )}

        {show ? (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            Berhasil ditambahkan
          </Alert>
        ) : (
          ""
        )}
        <hr className="mb-4" />
      </Col>
      <Col xs={12} sm={12} md={6} xl={6}>
        <h2 className="discount-tag">{name}</h2>
        <h1>{tagline}</h1>
        <p>{func}</p>
        <p>
          <span className="font-weight-bold">Jenis Kulit: </span>
          {skinType}
        </p>
        <p>
          <span className="font-weight-bold">Harga: </span>
          Rp. {price}
        </p>
        <span className="font-weight-bold">Cara Pemakaian: </span>
        <ul className="list-about">
          {howto.map((how, index) => {
            return <li key={index}>{how}</li>;
          })}
        </ul>
        <span className="font-weight-bold">Peringatan: </span>
        <ul className="list-about">
          {attent.map((attentions, index) => {
            return <li key={index}>{attentions}</li>;
          })}
        </ul>
        <span className="font-weight-bold">Ingredients: </span>
        <p>{ingredients}</p>
      </Col>
    </Row>
  ) : (
    <Row className="mt-5">
      <Col xs={12} sm={12} md={6} xl={6}>
        <ReactSkeleton height={250} />
      </Col>
      <Col xs={12} sm={12} md={6} xl={6}>
        <ReactSkeleton count={10} />
      </Col>
    </Row>
  );

  return (
    <Fragment>
      <Container>
        <div className="pull-down">{productMarkUp}</div>
      </Container>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  service: state.service,
  user: state.user,
});

const mapActionToProps = {
  getProducts,
  addToBag,
};

export default connect(mapStateToProps, mapActionToProps)(DetailProducts);
