import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Treatments from "../components/layout/Treatments";
import Products from "../components/layout/Products";
import Subscribe from "../components/layout/Subscribe";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import Logo from "../images/logo-grey.png";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="bg-welcome" />
        <div className="welcome-mobile">
          <h1>Beauty is inside yourself. Express them.</h1>
          <img src={Logo} alt="logo" />
        </div>
        <Container fluid>
          <Treatments />
          <Container>
            <hr />
          </Container>
          <Products />
        </Container>
        <Subscribe />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
