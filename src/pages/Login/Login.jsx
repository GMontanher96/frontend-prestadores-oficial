import React, { useState, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth";
import "./Login.css";
import Logo from "../../components/logo/Logo";

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
    <div className="fundo-lg">
    <div id="login" className="container form-lg">
      <Logo />
      <div className="logo-esc" />
      <form className="form form-lg1" onSubmit={handleSubmit}>
        <div className="field">
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
          <Button as={Link} to="/register" type="button" variant="danger">
            Cadastrar
          </Button>{" "}
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
