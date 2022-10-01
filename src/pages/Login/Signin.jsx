import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import { AuthContext } from "../../contexts/Auth";
import "./Signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dataUser = {
    id: id,
    email: email,
    name: name,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post("https://backend-novo-prestadores.herokuapp.com/register", dataUser, {
          mode: "no-cors",
        })
        .then((res) => alert("USUARIO CRIADO COM SUCESSO", res));
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      alert("OCORREU UM ERRO AO CRIAR UM USUÁRIO", error);
    }
  };

  return (
    <div className="fundo-sg">
    <div id="login" className="container form-sg">
    <div className="logo-esc1" />
      <form className="form form-sg1" onSubmit={handleSubmit}>
      <div className="field">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail</label>
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
          <label htmlFor="password">Senha</label>
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
       
      
        <div className="actions">
          <Button type="submit" variant="success">
            Cadastrar
          </Button>{" "}
          <Button as={Link} to="/login" type="button" variant="danger">
            Voltar
          </Button>{" "}
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signin;
