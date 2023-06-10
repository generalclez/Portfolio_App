import React from "react";
import { Container } from "react-bootstrap";
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
        <h3 className="text-center m-auto my-5 border border-dark border-1 w-25 ">
          SKILLS
        </h3>
        <h5>USING NOW:</h5>
        <br />
        <div className="col-12">
          <img className="mx-4" width={100} src={react} alt="react.js" />
          <img className="mx-4" width={80} src={js} alt="react.js" />
          <img className="mx-4" width={100} src={boot} alt="react.js" />
          <img className="mx-4" width={70} src={css} alt="react.js" />
          <img className="mx-4" width={83} src={html} alt="react.js" />
          <img className="mx-4" width={90} src={git} alt="react.js" />
          <img className="mx-4" width={90} src={github} alt="react.js" />
          <img className="mx-4" width={85} src={vs} alt="react.js" />
        </div>
        <h5 className="my-5">LEARNING:</h5>
        <img className="mx-4" width={90} src={next} alt="react.js" />
        <img className="mx-4" width={80} src={ts} alt="react.js" />
      </Container>
    </div>
  );
};

export default Skills;
