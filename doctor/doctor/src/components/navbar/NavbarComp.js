import React from "react";
import logo from "../logos/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavbarComp() {
  return (
    <Navbar className="nav-result">
      <Container>
        <Navbar.Brand className="nav-brand">
          <img
            src={logo}
            alt="undefined"
            width="200.02"
            height="124.97"
            className="d-inline-block align-top"
          />{" "}
          <span className="nav-span">ארגון רופאים לתזונה</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
