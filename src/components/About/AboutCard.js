import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a Software Engineering undergraduate student at uOttawa with a <span className="purple">passion</span> for building
            impactful and innovative solutions.
            <br />
            Currently, I’m focused on <span className="purple">web development, AI,</span> and experimenting with <span className="purple">Arduino</span> to develop smarter, more interactive systems.
            <br />
            My goal is to contribute to meaningful projects that <span className="purple">make a difference</span>.
            <br />
            <br />
            Some of the companies I've worked at:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 
              <a 
                href="https://www.rossvideo.com/control-systems/automated-production-control/quorum/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="purple"
              >
                Ross Video
              </a>
            </li>
            <li className="about-activity">
              <ImPointRight /> 
              <a 
                href="https://pinax.network/en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="purple"
              >
                Pinax
              </a>
            </li>
            <li className="about-activity">
              <ImPointRight /> 
              <a 
                href="https://www.canada.ca/en/public-service-commission.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="purple"
              >
                Public Service Commission of Canada
              </a>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
