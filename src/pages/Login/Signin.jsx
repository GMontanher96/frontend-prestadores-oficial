import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import { AuthContext } from "../../contexts/Auth";
import "./style.css";
import { Link } from "react-router-dom";

const Signin = () => {

const { authenticated, login } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [id, setId] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [provider, setProvider] = useState("");
  const [admin, setAdmin] = useState([0]);
  const [status, setStatus] = useState([0]);

  const dataUser = {
    id: id,
    email: email,
    cpfCnpj: cpfCnpj,
    password: password,
    confirmPassword: confirmPassword,
    provider: provider,
    admin: admin,
    status: status
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
        axios.post("https://prestaservico-backend.herokuapp.com/users", dataUser, {
          mode: 'no-cors'
        })
        .then((res) =>
        alert("USUARIO CRIADO COM SUCESSO", res),
        );
        setEmail("");
        setCpfCnpj("");
        setPassword("");
        setConfirmPassword("");
        setCpfCnpj("");
        setProvider("");
      } catch (error) {
      alert("OCORREU UM ERRO AO CRIAR UM USUÁRIO", error)
      }
  };

  return (
    <div id="login">
      <h1 className="title">Presta Serviço Web</h1>
      <h1 className="title">Cadastra-se Gratis!</h1>
      <form className="form" onSubmit={(handleSubmit)}>
        <div className="field">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="cpfCnpj">CPF/CNPJ</label>
          <input
            type="text"
            name="cpfCnpj"
            id="cpfCnpj"
            value={cpfCnpj}
            onChange={(e) => setCpfCnpj(e.target.value)}
            placeholder="Digite seu CPF OU CNPJ"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password">SENHA</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="confirmPassword">CONFIRMAÇÃO DE SENHA</label>
          <input
            type="password"
            name="confirmPassword"
            id="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme sua senha"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="provider">PRESTADOR DE SERVIÇO ?</label>
       
           <select
           value={provider}
            class="field"
            id="provider"
            onChange={(e) => {
              setProvider(e.target.value);
            }}
            required
          >
            <option value={0}>Selecione a opção</option>
            <option value={1}>SIM</option>
            <option value={2}>NÃO</option>
          </select>
        </div>
        <div className="actions">
          <Button type="submit" variant="success">Cadastrar</Button>{' '}
          <Button as= {Link} to="/login" type="button" variant="danger">
          Voltar</Button>{" "}

        </div>
     
      </form>
    </div>
  );
};

export default Signin;
