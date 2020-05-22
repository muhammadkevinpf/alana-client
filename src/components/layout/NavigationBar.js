import React from "react";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import ModalBag from "./ModalBag";

import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="default" variant="light">
      <Link to="/">
        <Navbar.Brand>
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="TREATMENT" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/treatments/acne">
              Acne
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/treatments/brightening">
              Brightening
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/treatments/rejuvenation">
              Rejuvenation
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/treatments/laser">
              Laser
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/treatments/antiaging">
              Anti Aging
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/treatments/bodycare">
              Body Care
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="PRODUCT" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/products/acne">
              Acne
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/brightening">
              Brightening
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/sensitive">
              Sensitive
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/antiaging">
              Anti Aging
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/bodycare">
              Body Care
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/clinic">
            CLINIC
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            ABOUT
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <ModalBag />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
