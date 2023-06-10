import React from "react";
import { Container } from "react-bootstrap";
import clez from "../images/DSC.jpg";
import github from "../images/github.png";

const Home = () => {
  return (
    <Container>
      <div className="row bg-secondary text-white rounded-5 border-2 square border my-5 d-flex alignItem-center p-5 ">
        <div className="col-7 px-3 mt-3">
          <h2>
            Hi, <br /> I'm Clement Adegun, <br /> Frontend Web Developer
          </h2>
          <br />
          <p>
            I am passionate about building software that improves the lives of
            those around me. I have good experience using ReactJs, Javascript,
            Bootstrap, HTML and CSS. I am extremely passionate about learning
            new technologies.
          </p>
          <a href="https://github.com/generalclez">
            <img className="mt-5" width={50} src={github} alt="Github" />
          </a>
        </div>

        <div className="col-5">
          <img
            src={clez}
            className="img-thumbnail border-2 rounded-5"
            width={600}
            alt="CLEMENT"
          />
        </div>
      </div>
    </Container>
  );
};
export default Home;
