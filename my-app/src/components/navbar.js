import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class MyNavbar extends Component {


  render(){

    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
    );
  }
}
