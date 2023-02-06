import React from "react";
import "../../styles/Header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// boring as can be header needs an image or some type of style 

export default function Header() {
  return (
    <Container className="header">
      <Row className="headerBar">
        <Col md={4} className="headText">
          <a href=" ">BryceBann</a>
        </Col>
      </Row>
    </Container>
  );  
}

// adding in the img and txt overlay link no work?



