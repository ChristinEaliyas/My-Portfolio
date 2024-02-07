import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Components-style/Navbar.css";

const Navigationbar = () => {
  return (
    <>
      <Container fluid>
        <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={7} className="navbar-row">
          <Row>
            <Col className="d-flex justify-content-center">
              <h5>About</h5>
            </Col>
            <Col className="d-flex justify-content-center">
              <h5>My Works</h5>
            </Col>
            <Col className="d-flex justify-content-center">
              <h5>Contact Me</h5>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Navigationbar;
