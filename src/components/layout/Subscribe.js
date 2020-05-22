import React from "react";
import { Row, Col } from "react-bootstrap";
function Subscribe() {
  return (
    <div className="subscriber-wrapper">
      <Row className="text-center">
        <Col sm={12} xl={6} md={6} xs={12}>
          <h1 className="discount-tag pt-4">Get 20% discount voucher !</h1>
        </Col>
        <Col sm={12} xl={6} md={6} xs={12}>
          <h6 className="font-weight-bold pb-1 small-text">
            Fill your email below to get the voucher
          </h6>
          <input
            type="email"
            className="form-subscriber"
            placeholder="email@email.com"
            autoComplete="off"
          />
          <button type="submit" className="form-button">
            SUBSCRIBE
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default Subscribe;
