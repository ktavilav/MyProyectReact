import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="bg-teal-700" variant="white" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="flex flex-wrap justify-between items-center">
          <Nav className="mr-auto">
            <Nav.Link href="/developers" className="px-4 py-2 text-white font-medium rounded-t-lg hover:text-teal-500 hover:bg-teal-700 bg-teal-400 hover:bg-teal-700 active:bg-teal-500">Developers</Nav.Link>
            <Nav.Link href="/projects" className="px-4 py-2 text-white font-medium rounded-t-lg hover:text-teal-500 hover:bg-teal-700 bg-teal-500 hover:bg-teal-700 active:bg-teal-500">Projects</Nav.Link>
            <Nav.Link href="/aboutme" className="px-4 py-2 text-white font-medium rounded-t-lg hover:text-teal-500 hover:bg-teal-700 bg-teal-600 hover:bg-teal-700 active:bg-teal-500">About me</Nav.Link>
            <Nav.Link href="/concepts" className="px-4 py-2 text-white font-medium rounded-t-lg hover:text-teal-500 hover:bg-teal-700 bg-teal-700 hover:bg-teal-700 active:bg-teal-500">Concepts</Nav.Link>
            <Nav.Link href="/exercisesgit" className="px-4 py-2 text-white font-medium rounded-t-lg hover:text-teal-500 hover:bg-teal-700 bg-teal-800 hover:bg-teal-700 active:bg-teal-500">Exercises Git</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default CustomNavbar;

