import React from "react";
import RESUME from "../resume21.pdf"
import {Navbar, Container} from "react-bootstrap";

function NavbarCustom() {
  return (
    <Navbar>
    <Navbar.Brand href="#home" id='logo'><span> Lior</span><span className="fade">Beyderman</span></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text id='resume' className='d-none d-lg-block'>
       <a href={RESUME} target="_blank" style={{textDecoration: 'none', color: 'white'}}>RESUME</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NavbarCustom;