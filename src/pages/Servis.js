import React, { useEffect, Fragment } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Footer from "../components/layout/Footer";
//redux
import { connect } from "react-redux";
import { getServices } from "../redux/actions/serviceActions";

const Service = ({ service: { services, loading }, getServices }) => {
  let urlService = window.location.pathname.split("/")[1];
  let urlCategory = window.location.pathname.split("/")[2];
  useEffect(() => {
    getServices(urlService, urlCategory);
  }, [urlService, urlCategory, getServices]);

  const serviceMarkUp = !loading ? (
    <Row>
      {services.map((serve, index) => {
        let urlProduct = serve.name.split(" ").join("-");
        return (
          <Col xs={6} sm={6} md={4} xl={4} key={index} className="mb-5">
            <Link to={`/${urlService}/${urlCategory}/${urlProduct}`}>
              <img
                src={serve.imageUrl}
                alt={serve.name}
                className="img-circle mb-3"
              />
              <br />
              <span className="link-text">{serve.name}</span>
            </Link>
          </Col>
        );
      })}
    </Row>
  ) : (
    <Row>
      <Col xs={6} sm={6} md={4} xl={4} className="mt-5">
        <Skeleton circle={true} height={150} width={150} />
        <Skeleton />
      </Col>
      <Col xs={6} sm={6} md={4} xl={4} className="mt-5">
        <Skeleton circle={true} height={150} width={150} />
        <Skeleton />
      </Col>
      <Col xs={6} sm={6} md={4} xl={4} className="mt-5">
        <Skeleton circle={true} height={150} width={150} />
        <Skeleton />
      </Col>
      <Col xs={6} sm={6} md={4} xl={4} className="mt-5">
        <Skeleton circle={true} height={150} width={150} />
        <Skeleton />
      </Col>
      <Col xs={6} sm={6} md={4} xl={4} className="mt-5">
        <Skeleton circle={true} height={150} width={150} />
        <Skeleton />
      </Col>
      <Col xs={6} sm={6} md={4} xl={4} className="mt-5">
        <Skeleton circle={true} height={150} width={150} />
        <Skeleton />
      </Col>
    </Row>
  );

  return (
    <Fragment>
      <Container>
        <div className="pull-down text-center mt-5">
          <h1 className="mb-5 discount-tag text-uppercase">{urlCategory}</h1>
          {serviceMarkUp}
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  service: state.service,
});
export default connect(mapStateToProps, { getServices })(Service);
