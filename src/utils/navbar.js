import React from "react";
import {Navbar, Container} from "react-bootstrap";

function NavbarCustom() {
  return (
    <Navbar>
    <Navbar.Brand href="#home" id='logo'><span> Lior</span><span className="fade">Beyderman</span></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NavbarCustom;
