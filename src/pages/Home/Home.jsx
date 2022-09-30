import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/template/Header/Header";
import { AuthContext } from "../../contexts/Auth";
import Carrosel from "../../components/carrosel/Carrosel";
import { getServicos } from "../../services/api";
import Pesquisa from "../../components/Pesquisa";
import { Container } from "react-bootstrap";
import PrestadorCard from "../../components/PrestadorCard";
import BotaoServico from "../../components/PrestadoresBox";
import PrestadoresBox from "../../components/PrestadoresBox";

import "./Home.css"

const Home = () => {
  const { logout } = useContext(AuthContext);
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [prestadores, setPrestadores] = useState([
    {
      nome: "José da Silva",
      imagem: ""
    },
    {
      nome: "José da Silva 2",
      imagem: ""
    },
    {
      nome: "José da Silva 2",
      imagem: ""
    }
  ])

  useEffect(() => {
    (async () => {
      const response = await getServicos();
      console.log(response)
      setServicos(response.data);
      setLoading(false);
    })();
  }, []);

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return <div className="loading">Carregando dados....</div>;
  }

  return (
    <div id="home" className="home-cont">
      <Pesquisa />
      <Carrosel />
      <PrestadoresBox prestadores={prestadores} />
    </div>
  );
};

export default Home;
