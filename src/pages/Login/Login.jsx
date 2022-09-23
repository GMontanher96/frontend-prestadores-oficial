import React, { useState, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import img8 from "../../image/8.jpg";

import { AuthContext } from "../../contexts/Auth";
import "./style.css";

const Login = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", { email, password });
    login(email, password); // integraçaõ com o meu contexto / api
  };

  return (
    <div id="login" className="container">
      <Figure.Image
        width={250}
        height={250}
        alt="171x180"
        src={img8}
      />
      <h1 className="title">Presta Serviço Web</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div className="actions">
          <Button type="submit" variant="success">
            Entrar
          </Button>{" "}
          <Button as={Link} to="/signin" type="button" variant="danger">Cadastrar</Button>{" "}
        </div>
      </form>
    </div>
  );
};

export default Login;
