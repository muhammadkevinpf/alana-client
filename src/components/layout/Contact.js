import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Contact() {
  return (
    <div className="p-4 text-center">
      <h3 className="text-heading">What Can We Help ?</h3>
      <p>
        Simply fill the form below, we like to read and response as soon as
        possible
      </p>
      <Container>
        <Row className="mt-2">
          <Col sm={12} md={6} xl={6}>
            <input
              type="text"
              className="form-input mt-4"
              autoComplete="off"
              placeholder="Name"
            />
          </Col>
          <Col sm={12} md={6} xl={6}>
            <input
              type="text"
              className="form-input mt-4"
              autoComplete="off"
              placeholder="Phone"
            />
          </Col>
          <Col sm={12} className="mt-4">
            <input
              type="text"
              className="form-input"
              autoComplete="off"
              placeholder="Email"
            />
          </Col>
          <Col sm={12} className="mt-4">
            <textarea className="form-input" placeholder="Message" rows="6" />
          </Col>
        </Row>
        <div className="text-right mt-3">
          <button type="button" className="form-button">
            SEND
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
