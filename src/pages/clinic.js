import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/layout/Footer";

export class about extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="pull-down">
            <Row>
              <Col sm={12} md={6} xl={6} className="mt-4">
                <div className="address mt-2">
                  <h1 className="discount-tag font-weight-bold">Bandung</h1>
                  <span className="block-title">Antapani</span>
                  <br />
                  <span>Jl. Terusan Jakarta no.155</span>
                  <br />
                  <span className="all-caps pr-2">Tel</span>
                  <span>022 7217845</span>
                  <br />
                  <span className="all-caps pr-2">Hrs</span>
                  <span>10:00 - 20:00 WIB</span>
                </div>
                <div className="address mt-2">
                  <span className="block-title">Kopo</span>
                  <br />
                  <span>
                    Ruko Lucky Business Centre A3, Jl. Taman Kopo Indah 1
                  </span>
                  <br />
                  <span className="all-caps pr-2">Tel</span>
                  <span>022 5426162</span>
                  <br />
                  <span className="all-caps pr-2">Hrs</span>
                  <span>09:00 - 20:00 WIB</span>
                </div>
                <div className="address mt-2">
                  <span className="block-title">Buah Batu</span>
                  <br />
                  <span>Jl. Kliningan no. 2</span>
                  <br />
                  <span className="all-caps pr-2">Tel</span>
                  <span>022 7319042</span>
                  <br />
                  <span className="all-caps pr-2">Hrs</span>
                  <span>10:00 - 20:00 WIB</span>
                </div>
                <div className="address mt-2">
                  <span className="block-title">Metro</span>
                  <br />
                  <span>
                    Ruko Metro Trade Centre D31, Jl. Soekarno Hatta no. 590
                  </span>
                  <br />
                  <span className="all-caps pr-2">Tel</span>
                  <span>022 7508515</span>
                  <br />
                  <span className="all-caps pr-2">Hrs</span>
                  <span>10:00 - 20:00 WIB</span>
                </div>
              </Col>
              <Col sm={12} md={6} xl={6}>
                <Row>
                  <Col sm={12} className="mt-4">
                    <h1 className="discount-tag font-weight-bold">Karawang</h1>
                    <div className="address mt-2">
                      <span className="block-title">Galuh Mas</span>
                      <br />
                      <span>Ruko Broadway III/B-28 Jl. Galuh Mas Raya</span>
                      <br />
                      <span className="all-caps pr-2">Tel</span>
                      <span>0267 8409459</span>
                      <br />
                      <span className="all-caps pr-2">Hrs</span>
                      <span>10:00 - 20:00 WIB</span>
                    </div>
                  </Col>
                  <Col sm={12} className="mt-4">
                    <h1 className="discount-tag font-weight-bold">
                      Jatinangor
                    </h1>
                    <div className="address mt-2">
                      <span className="block-title">Jatinangor</span>
                      <br />
                      <span>Jl. Raya Jatinangor km. 21 no. 11</span>
                      <br />
                      <span className="all-caps pr-2">Tel</span>
                      <span>022 87835101</span>
                      <br />
                      <span className="all-caps pr-2">Hrs</span>
                      <span>10:00 - 20:00 WIB</span>
                    </div>
                  </Col>
                  <Col sm={12} className="mt-4">
                    <h1 className="discount-tag font-weight-bold">Cimahi</h1>
                    <div className="address mt-2">
                      <span className="block-title">Cibabat</span>
                      <br />
                      <span>Jl. Jend. H. Amir Mahmd no. 268</span>
                      <br />
                      <span className="all-caps pr-2">Tel</span>
                      <span>022 86001469</span>
                      <br />
                      <span className="all-caps pr-2">Hrs</span>
                      <span>10:00 - 20:00 WIB</span>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default about;
