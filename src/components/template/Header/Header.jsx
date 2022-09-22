import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../../contexts/Auth";
import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";


function Header() {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
      };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> <i class="bi bi-tools m-2"></i>Prestadores WEB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="servico">Serviços</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home">
          <Button variant="outline-primary" onClick={handleLogout}>Sair</Button>{' '}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
