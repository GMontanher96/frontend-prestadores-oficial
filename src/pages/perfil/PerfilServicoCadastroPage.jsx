import React, { useState, useContext } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth";
import { Link } from "react-router-dom";

export default function PerfilServicoCadastroPage() {
  const { authenticated, login } = useContext(AuthContext);

  const [servico, setUser] = useState(null);
  const [id, setId] = useState(0);
  const [anuncio, setAnuncio] = useState("");
  const [nomefantasia, setNomefantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [descricao, setDescricao] = useState("");
  const [disponibilidade, setDisponibilidade] = useState("");
  const [avaliacao, setAvaliacao] = useState([0]);
  const [tipo, setTipo] = useState([0]);
  const [valor, setValor] = useState([0]);
  const [cidade, setCidade] = useState([0]);

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
    <div id="serv">
      <Col md={6}>
        <Form className="form" onSubmit={handleSubmit}>
          <h1 className="title"> Cadastro de Serviço </h1>
          <Form.Group className="m-1">
            <label htmlFor="anuncio">Anúncio</label>

            <textarea
              col-sm-10
              type="text"
              name="anuncio"
              id="anuncio"
              value={anuncio}
              onChange={(e) => setAnuncio(e.target.value)}
              placeholder="Anuncie seu serviço"
              required
            />
          </Form.Group>
          <Form.Group as={Col} className="m-1">
            <label htmlFor="nomefantasia">Nome Fantasia</label>

            <input
              type="text"
              name="nomefantasia"
              id="nomefantasia"
              value={nomefantasia}
              onChange={(e) => setNomefantasia(e.target.value)}
              placeholder="Nome Fantasia"
              required
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

          <Row>
            <Form.Group as={Col} className="m-1">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} className="m-1">
              <Form.Label>Disponibilidade</Form.Label>
              <Form.Control
                placeholder="Disponibilidade"
                value={disponibilidade}
                onChange={(e) => setDisponibilidade(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} className="m-1">
              <label htmlFor="avaliacao">Avaliação</label>

              <input
                type="text"
                name="avaliacao"
                id="avaliacao"
                value={avaliacao}
                onChange={(e) => setAvaliacao(e.target.value)}
                placeholder="Avaliação"
                required
              />
            </Form.Group>
            <Form.Group as={Col} className="m-1">
              <label htmlFor="tipo">Tipo</label>

              <input
                type="text"
                name="tipo"
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                placeholder="Tipo"
                required
              />
            </Form.Group>
            <Form.Group as={Col} className="m-1">
              <label htmlFor="valor">Valor</label>

              <input
                type="number"
                name="valor"
                id="valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="Valor"
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="m-1">
              <label htmlFor="cidade">Cidade</label>

              <input
                type="text"
                name="cidade"
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="cidade"
                required
              />
            </Form.Group>
          </Row>

          <div className="actions m-2">
            <Button class="btn btn-success" type="submit" variant="success">
              Cadastrar
            </Button>
            <Button as={Link} to="/login" type="button" variant="danger">
              Voltar
            </Button>
          </div>
        </Form>
      </Col>
    </div>
  );
}