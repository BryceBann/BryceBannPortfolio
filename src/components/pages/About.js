import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/About.css";

// images
import HTML from "../assets/icon/html-5.svg"
import CSS from "../assets/icon/css3.svg"
import Bootstrap from "../assets/icon/bootstrap-4.svg"
import javascript from "../assets/icon/javascript.svg"
import react from "../assets/icon/react.svg"
import reactBoot from "../assets/icon/react-bootstrap.svg";
import node from "../assets/icon/nodejs.svg"
import express from "../assets/icon/express.svg"
import mysql from "../assets/icon/mysql.svg"
import mongo from "../assets/icon/mongodb.svg"
import heroku from "../assets/icon/heroku.svg"
import git from "../assets/icon/git-icon.svg"
import github from "../assets/icon/github.svg"


export default function About() {
  return (
    <Container className="homePage">
      <Row className="aboutMe mb-5">
        <Col
          md={{ span: 4, offset: 0.5 }}
          className="aboutText border border-dark rounded "
        >
          <div className="">
            <h4>About Me</h4>
            <hr />
            <p>
              I am a Fullstack developer with a certification from Vanderbilt
              university. I have a burning drive to further learn and experience
              more in the world of front and back-end development. With a
              intrest in web development during earlier years i am prepared and
              excited to further that instrest and create a carrer.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="skills mb-5">
        <Col
          md={{ span: 4, offset: 8 }}
          className="skillsText border border-dark rounded"
        >
          <div>
            <h4>Skills</h4>
            <hr />
            <strong>Front-end</strong>
            <ul className="tech">
              <li><img src={HTML} alt=" " />HTML</li>
              <li><img src={CSS} alt=" " />CSS</li>
              <li><img src={Bootstrap} alt=" " />Bootstrap</li>
              <li><img src={javascript} alt=" " />JavaScript</li>
              <li><img src={react} alt=" " />React</li>
              <li><img src={reactBoot} alt=" " />React Bootstrap</li>
            </ul>
            <hr />
            <strong>Back-end</strong>
            <ul className="tech">
              <li><img src={node} alt=" " />Node</li>
              <li><img src={express} alt=" " />Express</li>
            </ul>
            <hr />
            <strong>Hosting</strong>
            <ul className="tech">
              <li><img src={heroku} alt=" " />Heroku</li>
              <li><img src={github} alt=" " />Github Pages</li>
            </ul>
            <hr />
            <strong>Database</strong>
            <ul className="tech">
              <li><img src={mongo} alt=" " />MongoDB</li>
              <li><img src={mysql} alt=" " />MySQL</li>
            </ul>
            <hr />
            <strong>Version Control</strong>
            <ul className="tech">
              <li><img src={git} alt=" " />Git</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="education">
        <Col
          md={{ span: 4, offset: 0.5 }}
          className="edText border border-dark rounded"
        >
          <div>
            <h4>Education</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, mel ut iracundia consequat
              accommodare, usu te impedit atomorum definitiones. Quis ponderum
              consequuntur usu no. Te labitur luptatum per. Equidem deterruisset
              at mel, ne nulla epicuri has, ei elitr ornatus accusam ius.
              Copiosae euripidis mel te, mel justo homero at. Nam fastidii
              antiopam ei, eam tota vivendum conceptam in, sea ut tempor
              aperiam. Te mea apeirian scripserit, autem indoctum qui no, ignota
              vocibus vix ad.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
