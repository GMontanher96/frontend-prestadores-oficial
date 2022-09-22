import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/template/Header/Header";
import { AuthContext } from "../../contexts/Auth";
import Carrosel from "../../components/carrosel/Carrosel"
import { getUsers } from "../../services/api";
import Pesquisa from "../../components/Pesquisa";
import { Container } from "react-bootstrap";
import PrestadorCard from "../../components/toasts/PrestadorCard";
import BotaoServico from "../../components/toasts/BotaoServico";


const Home = () => {
  const { logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    })();
  }, []);

  const handleLogout = () => {
    logout();
  };

  if(loading) {
    return <div className="loading">Carregando dados....</div>
  }

  return (
   <div>
    <Container>
    <Header />
    <Pesquisa />
    <div id="home">
    <Carrosel />
    <BotaoServico/>
    </div>
    </Container>
   </div>
  );
};

export default Home;
