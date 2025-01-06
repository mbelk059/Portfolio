import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import livesite from "../../Assets/Projects/livesite.png";
import emotion from "../../Assets/image.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import ucollab from "../../Assets/Projects/ucollab.png";
import bunnygame from "../../Assets/Projects/bunnygame.png";
import object from "../../Assets/Projects/objectdetect.png";
import insuwell from "../../Assets/Projects/insuwell.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="uoCourses"
              description="."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insuwell}
              isBlog={false}
              title="insuWell"
              description="An AI-driven wellness coach designed to improve insulin sensitivity and help manage blood sugar levels through personalized lifestyle optimization."
              ghLink="https://github.com/mbelk059/Hack-the-Hill-2-insuWell?tab=readme-ov-file"
              demoLink="https://devpost.com/software/insuwell"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={object}
              isBlog={false}
              title="Real-Time Object Detector"
              description="A real-time object detection app built with a pre-trained COCO SSD model."
              ghLink="https://github.com/mbelk059/ReactComputerVisionTemplate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ucollab}
              isBlog={false}
              title="uCollab"
              description="A chat web app similar to Discord where university students can collaborate, share resources, and connect effortlessly, fostering a vibrant online community."
              ghLink="https://github.com/mbelk059/UottaHack6-Challenge"
              demoLink="https://devpost.com/software/ucollab-94cxz1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={livesite}
              isBlog={false}
              title="uOttaHack 2025 Live Site"
              description="."
              ghLink="https://github.com/uOttaHack/2025-live-site"
              demoLink="https://live.uottahack.ca/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather App"
              description="A simple weather app I made to learn flutter app development."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="The Hidden Farm Village"
              description="A cozy farming game built with Pygame."
              ghLink="https://github.com/mbelk059/The-Hidden-Farm-Village"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Notes App"
              description="Minimal notes app made with Isar database."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Travel With Us"
              description="."
              ghLink="https://github.com/mbelk059/Travel-With-Us-2"
              demoLink="https://mbelk059.github.io/Travel-With-Us-2/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bunnygame}
              isBlog={false}
              title="Bunny Game"
              description="A cute pixel RPG built with GameMaker."
              ghLink="https://github.com/mbelk059/Bunny-Game"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
