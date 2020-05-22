import React, { useEffect, Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/layout/Footer";
import ReactSkeleton from "react-loading-skeleton";

import { getTreatments } from "../redux/actions/serviceActions";
import { connect } from "react-redux";

const ServiceDetails = ({
  service: {
    treatments: {
      name,
      tagline,
      imageUrl,
      frequency,
      duration,
      skinType,
      func,
    },
    loading,
  },
  getTreatments,
}) => {
  let urlProducts = window.location.pathname.split("/")[3];
  useEffect(() => {
    getTreatments(urlProducts);
  }, [urlProducts, getTreatments]);

  const serviceMarkUp = !loading ? (
    <Row>
      <Col xs={12} sm={12} md={6} xl={6} className="text-center">
        <img src={imageUrl} alt={name} className="image-service mt-5" />
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
          <span className="font-weight-bold">Lama Perawatan: </span>
          {duration}
        </p>
        <p>
          <span className="font-weight-bold">Frekuensi: </span>
          {frequency}
        </p>
      </Col>
    </Row>
  ) : (
    <Row>
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
        <div className="pull-down mt-5">{serviceMarkUp}</div>
      </Container>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  service: state.service,
});

const mapActionToProps = {
  getTreatments,
};

export default connect(mapStateToProps, mapActionToProps)(ServiceDetails);
