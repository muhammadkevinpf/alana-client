import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import acne from "../../images/treatment/acne.jpg";
import antiaging from "../../images/treatment/antiaging.jpg";
import laser from "../../images/treatment/laser.jpg";
import bodycare from "../../images/treatment/bodycare.jpg";
import brightening from "../../images/treatment/brightening.jpg";
import rejuvenation from "../../images/treatment/rejuvenation.jpg";

const treatments = [
  {
    image: acne,
    linkTo: "/treatments/acne",
    body: "ACNE",
  },
  {
    image: brightening,
    linkTo: "/treatments/brightening",
    body: "BRIGHTENING",
  },
  {
    image: rejuvenation,
    linkTo: "/treatments/rejuvenation",
    body: "REJUVENATION",
  },
  {
    image: antiaging,
    linkTo: "/treatments/antiaging",
    body: "ANTI AGING",
  },
  {
    image: laser,
    linkTo: "/treatments/laser",
    body: "LASER",
  },
  {
    image: bodycare,
    linkTo: "/treatments/bodycare",
    body: "BODY CARE",
  },
];

const Treatments = () => {
  return (
    <div className="p-5">
      <h3 className="text-heading">Our Treatment</h3>
      <Row className="text-center">
        {treatments.map((treatment, index) => {
          return (
            <Col lg={4} md={4} sm={6} xs={6} key={index} className="mt-5">
              <Link to={treatment.linkTo}>
                <img
                  src={treatment.image}
                  className="img-circle"
                  alt={treatment.body}
                />
                <p className="mt-3 link-text text-service">{treatment.body}</p>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Treatments;
