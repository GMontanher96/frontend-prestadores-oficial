import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../../contexts/Auth";
import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import UserMenu from "../../UserMenu";

import "./Header.css";

function Header() {
  const { logout, authenticated } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg" className="navtt">
      <Container>
        <Navbar.Brand href="/">
<div className="logo-p"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="/" className="bot-nav">Home</Nav.Link>
            <Nav.Link href="/servicos" className="bot-nav">Serviços</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {!authenticated && (
            <Nav className="justify-content-center">
              <Nav.Link href="/signin" className="bot-nav">Registre-se</Nav.Link>
              <Nav.Link href="/login" className="bot-nav">Entrar</Nav.Link>
            </Nav>
          )}
          {authenticated && <UserMenu />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
