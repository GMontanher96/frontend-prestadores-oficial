import React, { useState, useContext } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth";
import { Link } from "react-router-dom";

export default function PerfilServicoCadastroPage() {
  const { authenticated, login } = useContext(AuthContext);

  const [servico, setUser] = useState(null);
  const [id, setId] = useState([0]);
  const [UserId, setUserId] = useState([0]);
  const [anuncio, setAnuncio] = useState("");
  const [nomefantasia, setNomefantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [descricao, setDescricao] = useState("");
  const [disponibilidade, setDisponibilidade] = useState("");
  const [avaliacao, setAvaliacao] = useState("teste");
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");
  const [cidade, setCidade] = useState("");

  const dataService = {
    id: id,
    anuncio: anuncio,
    nomefantasia: nomefantasia,
    cnpj: cnpj,
    descricao: descricao,
    disponibilidade: disponibilidade,
    avaliacao: avaliacao,
    tipo: tipo,
    valor: valor,
    cidade: cidade,
    UserId: UserId
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post(
          "https://prestaservico-backend.herokuapp.com/servicos",
          dataService,
          {
            mode: "no-cors",
          }
        )
        .then((res) => alert("SERVIÇO CRIADO COM SUCESSO", res));
      setAnuncio("");
      setNomefantasia("");
      setCnpj("");
      setDescricao("");
      setDisponibilidade("");
      setAvaliacao("");
      setTipo("");
      setValor("");
      setCidade("");
    } catch (error) {
      alert("OCORREU UM ERRO AO CRIAR UM SERVIÇO", error);
    }
  };

  return (
    <Container p-6>
    <div id="serv">
      <Col md={6}>
        <Form className="form" onSubmit={handleSubmit}>
          <h1 className="title"> Cadastro de Serviço </h1>
          <Form.Group className="m-1">
          <Form.Label>Anúnicio </Form.Label>
            <Form.Control
              value={anuncio}
              onChange={(e) => setAnuncio(e.target.value)}
              placeholder="Anuncie seu serviço"
            />
          </Form.Group>
          <Row>
          <Form.Group as={Col} className="m-1">
          <Form.Label>Nome Fantasia </Form.Label>
            <Form.Control
              value={nomefantasia}
              onChange={(e) => setNomefantasia(e.target.value)}
              placeholder="Nome Fantasia"
            />
          </Form.Group>
          <Form.Group as={Col} className="m-1">
            <Form.Label>Cnpj</Form.Label>
            <Form.Control
              placeholder="Cnpj"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
          </Form.Group>
          </Row>
            <Form.Group as={Col} className="m-1">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Form.Group>
            <Row>
            <Form.Group as={Col} className="m-1">
              <Form.Label>Disponibilidade</Form.Label>
              <Form.Control
                placeholder="Disponibilidade"
                value={disponibilidade}
                onChange={(e) => setDisponibilidade(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} className="m-1">
              <Form.Label>Avaliação</Form.Label>
              <Form.Control
                placeholder="Avaliação"
                value={avaliacao}
                onChange={(e) => setAvaliacao(e.target.value)}
                
                />
            </Form.Group>
            <Form.Group as={Col} className="m-1">
            <Form.Label>Tipo</Form.Label>
              <Form.Control
                placeholder="Tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} className="m-1">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="Valor"
              />
            </Form.Group>
            </Row>
            <Form.Group className="m-1">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="cidade"
              />
            </Form.Group>
          <div className="actions m-3">
            <Button className="m-3" as={Link} to="/login" type="button" variant="danger">
              Voltar
            </Button>
            <Button class="btn btn-success" type="submit" variant="success">
              Cadastrar
            </Button>
          </div>
        </Form>
      </Col>
    </div>
    </Container>
  );
}
