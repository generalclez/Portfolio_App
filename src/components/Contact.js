import React from "react";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import whatsapp from "../images/whatsapp.png";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="text-center m-5 mt-5 ">
      <h3 width={30}>CONTACT ME</h3>

      <div className="text-start m-5 mt-5 square border border-success border-2 w-50 m-auto p-3">
        <div className="mt-4 ms-5 ps-5">
          <img width={30} src={linkedin} alt="Likedin"></img> Connect with me on{" "}
          <a href="https://www.linkedin.com/in/clement-adegun-3001a41b6/">
            Linkedin
          </a>
        </div>

        <div className="mt-4 ms-5 ps-5">
          <img width={30} src={facebook} alt="clement"></img> Connect with me on{" "}
          <a href="https://web.facebook.com/adegunclement">Facebook</a>
        </div>

        <div className="mt-4 ms-5 ps-5">
          <img width={35} src={whatsapp} alt="clement"></img> Connect with me on{" "}
          <a href="https://wa.me/+2348165061080">Whatsapp</a>
        </div>

        <div className="mt-4 ms-5 ps-5">
          <img width={30} src={instagram} alt="clement"></img> Connect with me
          on <a href="https://www.instagram.com/clez_1/">Instagram</a>
        </div>

        <div className="mt-4 ms-5 ps-5">
          <img width={30} src={twitter} alt="clement"></img> Connect with me on{" "}
          <a href="https://twitter.com/General_Clez">Twitter</a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
