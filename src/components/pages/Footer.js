import React from "react";
import "../../styles/Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import pic from "../assets/icon/logo.png";

// clean up looks likes shit
export default function Footer() {
  return (
    <Container className="Footer">
      <Row>
        <footer className="footer py-2  footer-style">
          <Col>
            <div className="leftFooter">
              <h2>Excited to develop</h2>
            </div>
          </Col>
          <Col>
            <div className="centerFooter">
              
            </div>
          </Col>
          <Col>
            <div className="rightFooter">
              <h2>
                Created by{" "}
                <a href="https://github.com/BryceBann">
                  <span className="nameLink">Bryce Bann</span>
                </a>
              </h2>
            </div>
          </Col>
        </footer>
      </Row>
    </Container>
  );
}
