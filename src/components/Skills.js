import React from "react";
import { Container } from "react-bootstrap";
// import { DiJavascript } from "react-icons/di";
import boot from "../images/boot.jpg";
import js from "../images/js.png";
import css from "../images/css.png";
import html from "../images/html.png";
import git from "../images/git.png";
import react from "../images/react.png";
import next from "../images/next.png";
import ts from "../images/ts.png";
import github from "../images/github.png";
import vs from "../images/vs.jpg";

const Skills = () => {
  return (
    <div>
      <Container>
        <h3 className="text-center m-auto mt-5 square border border-dark border-1 w-25 ">
          SKILLS
        </h3>
        <br />
        <h5>USING NOW:</h5>
        <br />
        <div className>
          <img className="me-5" width={100} src={react} alt="react.js" />
          <img className="me-5" width={80} src={js} alt="react.js" />
          <img className="me-5" width={100} src={boot} alt="react.js" />
          <img className="me-5" width={70} src={css} alt="react.js" />
          <img className="me-5" width={83} src={html} alt="react.js" />
          <img className="me-5" width={90} src={git} alt="react.js" />
          <img className="me-5" width={90} src={github} alt="react.js" />
          <img className="me-5" width={85} src={vs} alt="react.js" />
        </div>
        <br />
        <h5>LEARNING:</h5>
        <br />
        <img className="me-5" width={90} src={next} alt="react.js" />
        <img className="me-5" width={80} src={ts} alt="react.js" />
      </Container>
    </div>
  );
};

export default Skills;
