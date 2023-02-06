import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "emailjs-com";
import "../../styles/Contact.css";
import linkedIn from "../assets/icon/linkedin.svg";
import github from "../assets/icon/github.svg";

// add in emailer function, add links to linkedin,github, maybe make tech twitter or make own blog page??

const EmailForm = () => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ouj5p2d",
        "template_pl1ldyq",
        { recipient, subject, message },
        "U4xjik0IjOvwOsi8W"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="contact">
      <Row>
        <form onSubmit={handleSubmit} className="emailForm">
          <Row className="emailRow">
            <Col className="emailCol">
            <input
              className="email"
              type="email"
              placeholder="Enter your email"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              required
            />
            </Col>
          </Row>

          <Row className="subjectRow">
            <Col className="subjectCol">
            <input
              className="subject"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            </Col>
          </Row>

          <Row className="messageRow">
            <Col className="messageCol">
            <input
             className="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            </Col>
          </Row>
          <button type="submit">Send Email</button>
        </form>
      </Row>

      <Row>
        <Col className="socialLink">
          <a href="https://www.linkedin.com/in/bryce-bann-4151ba1b8/" alt=" ">
          <img src={linkedIn} alt="linkedIn" className=".img"/>
          </a>
        </Col>

        <Col className="socialLink">
          <a href="https://github.com/BryceBann" alt=" ">
          <img src={github} alt="github" className=".img"/>
          </a>
        </Col>

        <Col className="socialLink">
          <p>somehting or nothing </p>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailForm;
