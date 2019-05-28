import React, { Component } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from "../../../assets/Home/feather.svg";
class NavbarComp extends Component {
  render() {
    return (
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Navbar expand="md" className="navbar fixed-top navbar-light container">
            <Navbar.Brand href="#home">
              <img alt="" src={Logo} />
              Squabble
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="nav navbar-nav" style={{ width: "100%" }}>
              <Nav className="ml-auto">
                <Nav.Link className="nav-link" to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-link" to="/about">
                  About
                </Nav.Link>
                <Nav.Link className="nav-link" to="/login">
                  Features
                </Nav.Link>
                <Nav.Link className="homeButton">
                  <button
                    className="btn btn-primary">
                    Sign in
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default NavbarComp;
