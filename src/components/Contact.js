import React from "react";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="row text-center m-5 my-5 ">
      <h3 width={30}>CONTACT ME</h3>

      <div className="m-5 my-5 square border border-secondary rounded border-2 w-50 m-auto p-3 bg-secondary text-white">
        <div className="my-5">
          Connect with me on{" "}
          <a href="https://www.linkedin.com/in/clement-adegun-3001a41b6/">
            <img width={30} src={linkedin} alt="Likedin"></img>
          </a>
        </div>

        <div className="my-5">
          Connect with me on{" "}
          <a href="https://twitter.com/General_Clez">
            <img width={30} src={twitter} alt="clement"></img>
          </a>
        </div>

        <div className="my-5 pe-5">
          Send a direct message on{" "}
          <a href="https://wa.me/+2348165061080">
            <img width={35} src={whatsapp} alt="clement"></img>{" "}
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
