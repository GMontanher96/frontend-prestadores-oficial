import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../../contexts/Auth";
import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import UserMenu from "../../UserMenu";

function Header() {
  const { logout, authenticated } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <i class="bi bi-tools m-2"></i> Prestadores WEB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/servicos">Serviços</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {!authenticated && (
            <Nav className="justify-content-center">
              <Nav.Link href="/signin">Registre-se</Nav.Link>
              <Nav.Link href="/login">Entrar</Nav.Link>
            </Nav>
          )}
          {authenticated && <UserMenu />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
