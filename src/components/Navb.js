import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navb = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Clement Adegun</Navbar.Brand>
          <Nav className="me-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About Me</Nav.Link>
            <Nav.Link href="/Skills">Skills</Nav.Link>
            <Nav.Link href="/Project">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navb;
