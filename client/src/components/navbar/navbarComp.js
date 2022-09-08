import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
function NavbarComp() {
  return (
    <Navbar className="nav-result">
      <Container>
        <Navbar.Brand className="nav-brand"></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
