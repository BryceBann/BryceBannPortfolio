import React from "react";
import "../styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// very basic no good style links are basic and ugly

function Navbar({ currentPage, handlePageChange }) {
  return (
    <Container className="navBar">
      <Row className="navBarRow">
        <ul className="nav moveNav">
          <Col className="about" md={1.5}>
            <li className="nav-item">
              <a
                href=" "
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
          </Col>
          <Col className="resume" md={1.5}>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </Col>
          <Col className="project" md={1.5}>
            <li className="nav-item">
              <a
                href="#project"
                onClick={() => handlePageChange("Project")}
                className={
                  currentPage === "Project" ? "nav-link active" : "nav-link"
                }
              >
                Project
              </a>
            </li>
          </Col>
          <Col className="contact" md={1.5}>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </Col>
        </ul>
      </Row>
    </Container>
  );
}

export default Navbar;
