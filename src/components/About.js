import React from "react";
import { Container } from "react-bootstrap";
import clez from "../images/DSC.jpg";

const About = () => {
  return (
    <Container>
      <h3 className="text-center m-auto my-5 square border border-dark border-1 w-25 ">
        ABOUT ME
      </h3>
      <div className="my-5 d-flex">
        <div className="col-3 my-5">
          <img
            src={clez}
            className="img-thumbnail rounded-5 my-5 "
            width={600}
            alt="CLEMENT"
          />
        </div>
        <div>
          <p className="col-12 ms-3 ps-3">
            Hello World, I'm Clement Adegun, a passionate and dedicated frontend
            web developer with a background in physics. I hold a degree in
            Physics, which has provided me with a solid foundation in analytical
            thinking and problem-solving. Alongside my technical expertise in
            web development, I also possess a strong knowledge of graphics
            design, allowing me to create visually stunning and user-friendly
            interfaces. <br />
            <br />
            Over the past five months, I have been on an exciting journey of
            frontend development, continuously expanding my skill set. I have
            been actively working on building my portfolio, focusing on creating
            dynamic and responsive websites that reflect my growing abilities.
            <br />
            <br /> I am committed to delivering high-quality projects that
            demonstrate my dedication and passion for web development. Each
            project I undertake presents a valuable opportunity for me to learn,
            improve, and refine my skills. I embrace the challenges and see them
            as stepping stones on my journey to becoming an exceptional frontend
            web developer.
            <br />
            <br />
            Beyond my technical skills, I bring a collaborative mindset and
            thrive in team environments. I believe in the power of teamwork and
            effective communication to achieve outstanding results. My
            background in physics has honed my analytical thinking and
            problem-solving abilities, enabling me to approach web development
            challenges with a unique perspective.
            <br />
            <br /> I am currently seeking new opportunities to further grow and
            develop as a frontend web developer. If you're looking for someone
            who is enthusiastic, dedicated, and eager to contribute, let's
            connect and explore how we can work together to create exceptional
            digital experiences. I'm excited about the journey ahead and the
            chance to learn and grow.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
