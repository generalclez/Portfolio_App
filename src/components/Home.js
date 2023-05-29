import React from "react";
import { Container } from "react-bootstrap";
import DSC from "../images/DSC.jpg";
import github from "../images/github.png";
// import linkedin from "../images/linkedin.png";

const Home = () => {
  return (
    <Container>
      <div className="bg-secondary bg-gradient text-white rounded-5 square border border-dark  mt-5 d-flex alignItem-center p-5 border-2">
        <div className="mt-">
          <h2>
            Hi, <br /> I'm Clement Adegun, <br /> Frontend Web Developer
          </h2>
          <br />
          <p className="">
            I am passionate about building software that improves the lives of
            those around me. I have good experience using ReactJs, Javascript,
            Bootstrap, HTML and CSS. I am extremely passionate about learning
            new technologies.
          </p>
          <a href="https://github.com/generalclez?tab=repositories">
            <img width={50} src={github} alt="Github" />
          </a>
        </div>
        <br />

        <div className>
          <img
            src={DSC}
            className="img-thumbnail ml-5 square border border-dark border-2 float-end rounded-5"
            width={600}
            alt="CLEMENT"
          />
        </div>
      </div>
      {/* <div className="mt-5 ms-5 pe-5">
        <a href="/">
          <img width={50} src={github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/clement-adegun-3001a41b6/">
          <img width={40} src={linkedin} alt="Linkedin" />
        </a>
      </div> */}
    </Container>
  );
};
export default Home;
