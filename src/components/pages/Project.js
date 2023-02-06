import React from "react";
import pic1 from "../../img/oneStop2.PNG";
import pic2 from "../../img/TPR-port.png";
import pic3 from "../../img/TheTownie.PNG";
import pic4 from "../../img/securePassword.PNG";
import pic5 from "../../img/weather.PNG";
import pic6 from "../../img/Tracker.PNG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "../../styles/Project.css";

// images
import HTML from "../assets/icon/html-5.svg"
import CSS from "../assets/icon/css3.svg"
import Bootstrap from "../assets/icon/bootstrap-4.svg"
import javascript from "../assets/icon/javascript.svg"
import react from "../assets/icon/react.svg"
import node from "../assets/icon/nodejs.svg"
import express from "../assets/icon/express.svg"
import mysql from "../assets/icon/mysql.svg"
import mongo from "../assets/icon/mongodb.svg"


// make projects linkable find some type of fade or darken style in boot starp find cool way to show projects abstract postion

export default function Project() {
  return (
    <Container className="project">
      <Row className="d-flex flex-column justify-content-around align-items-center ">
        <div className="d-flex justify-content-around align-items-center flex-wrap ">
          <Card className="mb-5 projectCard">
            <Card.Img src={pic1} className="pic hover-zoom" />
            <Card.Text>OneStop</Card.Text>
            <div>
            <Accordion>
              <Accordion.Header className="accordionHeader">Deatails</Accordion.Header>
              <Accordion.Body>
                <strong>About:</strong>
                <p>
                  Use this simple webpage to plot out a road trip by get the
                  local weather and gas price around the city and state
                </p>
                <hr />
                <strong>Features:</strong>
                <ul>
                  <li>API calls for weather/gas</li>
                  <li>Easy user interface</li>
                </ul>
                <hr />
                <strong>Tech:</strong>
                <ul className="tech">
                  <li><img src={javascript} alt=" " />JavaScript</li>
                  <li><img src={HTML} alt=" " />HTML</li>
                  <li><img src={CSS} alt=" " />CSS</li>
                </ul>
              </Accordion.Body>
            </Accordion>
            </div>
            <div>
            <Card.Link
              className="link"
              href="https://github.com/tierney03/OneStop"
              target="_blank"
            >
              Github
            </Card.Link>
            <Card.Link
              className="link"
              href="https://tierney03.github.io/OneStop/"
              target="_blank"
            >
              Deployed
            </Card.Link>
            </div>
          </Card>

          <Card className="mb-5 projectCard">
            <Card.Img src={pic2} className="pic" />
            <Card.Text>portResort</Card.Text>
            <Accordion>
              <Accordion.Header>Deatails</Accordion.Header>
              <Accordion.Body>
                <strong>About:</strong>
                <p>
                  Create a personal portfolio login, enter your information, and
                  deploy.{" "}
                </p>
                <hr />
                <strong>Features:</strong>
                <ul>
                  <li>Instant portfolio</li>
                  <li>Save information</li>
                  <li>Edit information</li>
                </ul>
                <hr />
                <strong>Tech:</strong>
                <ul className="tech">
                  <li><img src={javascript} alt="" />JavaScript</li>
                  <li><img src={express} alt="" />Express</li>
                  <li><img src={mysql} alt="" />Mysql</li>
                  <li><img src={Bootstrap} alt="" />Bootstrap</li>
                  <li><img src={node} alt="" />Node</li>
                </ul>
              </Accordion.Body>
            </Accordion>
            <div>
            <Card.Link
              className="link"
              href="https://github.com/cmash93/The-Port-Resort"
              target="_blank"
            >
              Github
            </Card.Link>
            <Card.Link
              className="link"
              href="https://mighty-plateau-36759.herokuapp.com/"
              target="_blank"
            >
              Deployed
            </Card.Link>
            </div>
          </Card>

          <Card className="mb-5 projectCard">
            <Card.Img src={pic3} className="pic" />
            <Card.Text>The Townie</Card.Text>
            <Accordion>
              <Accordion.Header className="accordionHeader">Deatails</Accordion.Header>
              <Accordion.Body>
                <strong>About:</strong>
                <p>
                  A social media page with the ability to Post your thoughts and
                  interact with friends and family
                </p>
                <hr />
                <strong>Features:</strong>
                <ul>
                  <li>View liked post</li>
                  <li>Comment on users post</li>
                  <li>Search up a users profile</li>
                </ul>
                <hr />
                <strong>Tech:</strong>
                <ul className="tech">
                  <li><img src={javascript} alt="" />JavaScript</li>
                  <li><img src={HTML} alt="" />HTML</li>
                  <li><img src={CSS} alt="" />CSS</li>
                  <li><img src={express} alt="" />Express</li>
                  <li><img src={node} alt="" />Node</li>
                  <li><img src={mongo} alt="" />MongoDB</li>
                  <li><img src={react} alt="" />React</li>
                  <li><img src={mysql} alt="" />MySQL</li>
                </ul>
              </Accordion.Body>
            </Accordion>
            <div>
            <Card.Link
              className="link"
              href="https://github.com/BryceBann/The-Town-Soical"
              target="_blank"
            >
              Github
            </Card.Link>
            <Card.Link
              className="link"
              href="https://the-town-social.herokuapp.com/"
              target="_blank"
            >
              Deployed
            </Card.Link>
            </div>
          </Card>

          <Card className="mb-5 projectCard">
            <Card.Img src={pic4} className="pic" />
            <Card.Text>Secure password</Card.Text>
            <Accordion>
              <Accordion.Header className="accordionHeader">Deatails</Accordion.Header>
              <Accordion.Body>
                <strong>About:</strong>
                <p>
                  Select your wanted password criteria and be given a completly
                  random secure password
                </p>
                <hr />
                <strong>Features:</strong>
                <ul>
                  <li>Randomly selected charcters</li>
                  <li>No duplicate password</li>
                </ul>
                <hr />
                <strong>Tech:</strong>
                <ul className="tech">
                  <li><img src={javascript} alt="" />JavaScript</li>
                  <li><img src={HTML} alt="" />HTML</li>
                  <li><img src={CSS} alt="" />CSS</li>
                </ul>
              </Accordion.Body>
            </Accordion>
            <div>
            <Card.Link
              className="link"
              href="https://github.com/BryceBann/Secure-Password"
            >
              Github
            </Card.Link>
            <Card.Link
              className="link"
              href="https://brycebann.github.io/Secure-Password/"
            >
              Deployed
            </Card.Link>
            </div>
          </Card>

          <Card className="mb-5 projectCard">
            <Card.Img src={pic5} className="pic" />
            <Card.Text>API Weather</Card.Text>
            <Accordion>
              <Accordion.Header className="accordionHeader">Deatails</Accordion.Header>
              <Accordion.Body>
                <strong>About:</strong>
                <p>Simple weather web page to check local weather forecst</p>
                <hr />
                <strong>Features:</strong>
                <ul>
                  <li>Adds to local storage</li>
                  <li>Api return will dynamically update page</li>
                </ul>
                <hr />
                <strong>Tech:</strong>
                <ul className="tech">
                  <li><img src={javascript} alt="" />JavaScript</li>
                  <li><img src={HTML} alt="" />HTML</li>
                  <li><img src={CSS} alt="" />CSS</li>
                </ul>
              </Accordion.Body>
            </Accordion>
            <div>
            <Card.Link
              className="link"
              href="https://github.com/BryceBann/API-weather"
            >
              Github
            </Card.Link>
            <Card.Link
              className="link"
              href="https://brycebann.github.io/API-weather/"
            >
              Deployed
            </Card.Link>
            </div>
          </Card>

          <Card className="mb-5 projectCard">
            <Card.Img src={pic6} className="pic" />
            <Card.Text>employee Tracker</Card.Text>
            <Accordion>
              <Accordion.Header className="accordionHeader">Deatails</Accordion.Header>
              <Accordion.Body>
                <strong>About:</strong>
                <p>
                  A comand line application that will prompt you avaible options
                  to add and remove employees and other resources
                </p>
                <hr />
                <strong>Features:</strong>
                <ul>
                  <li>Update and remove from database</li>
                </ul>
                <hr />
                <strong>Tech:</strong>
                <ul className="tech">
                  <li><img src={javascript} alt="" />JavaScript</li>
                  <li><img src={mysql} alt="" />MySQL</li>
                </ul>
              </Accordion.Body>
            </Accordion>
            <div>
            <Card.Link
              className="link"
              href="https://github.com/BryceBann/Employee-tracker"
            >
              Github
            </Card.Link>
            </div>
          </Card>
        </div>
      </Row>
    </Container>
  );
}
