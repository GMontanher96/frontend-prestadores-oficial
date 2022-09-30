import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/template/Header/Header";
import { AuthContext } from "../../contexts/Auth";
import Carrosel from "../../components/carrosel/Carrosel";
import Pesquisa from "../../components/Pesquisa";
import { Container } from "react-bootstrap";
import PrestadorCard from "../../components/PrestadorCard";
import BotaoServico from "../../components/PrestadoresBox";
import PrestadoresBox from "../../components/PrestadoresBox";
import { HomeContext } from "../../contexts/Home";

import "./Home.css"

const Home = () => {
  const { getServicos, servicos } = useContext(HomeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServicos().then(() => {
      setLoading(false);
    })
  }, []);

  if (loading) {
    return <div className="loading">Carregando dados....</div>;
  }

  return (
    <div id="home" className="home-cont">
      <Pesquisa />
      <Carrosel />
      <PrestadoresBox prestadores={servicos} />
    </div>
  );
};

export default Home;
