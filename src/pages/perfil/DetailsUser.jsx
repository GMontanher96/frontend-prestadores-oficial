import React, { useState, useContext } from "react";
import { Button, Form, Row, Col, Container, Nav } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FormEndereco from "../../components/form/FormUserEndereco";
import FormContato from "../../components/form/FormUserContato";

export default function PerfilServicoCadastroPage() {
  const { authenticated, login } = useContext(AuthContext);

  return (
    <div className="form-detalhes-user">
      <Container>
        <br />
        <h2>Detalhes de Usuário</h2>

        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="servicos"
          className="mb-3"
        >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="servicos">Meus Serviços</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="endereco">Endereço</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="contato">Contato</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="usuario">Usuário</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="servicos"></Tab.Pane>
                <Tab.Pane eventKey="endereco">
                  <FormEndereco />
                </Tab.Pane>
                <Tab.Pane eventKey="contato">
                  <FormContato />
                </Tab.Pane>
                <Tab.Pane eventKey="usuario" disabled></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}
