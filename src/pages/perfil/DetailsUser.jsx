import React, { useState, useContext } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth";
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormEndereco from '../../components/form/FormUserEndereco';
import FormContato from '../../components/form/FormUserContato';

export default function PerfilServicoCadastroPage() {
  const { authenticated, login } = useContext(AuthContext);



  return (
    <Container>
      <br />
      <h2>Detalhes de Usuário</h2>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="endereco" title="Endereço">
        <FormEndereco />
      </Tab>
      <Tab eventKey="contato" title="Contato">
        <FormContato />
      </Tab>
      <Tab eventKey="usuario" title="Usuário" disabled>
      </Tab>
    </Tabs>
    </Container>
  );
}
