import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import Pesquisa from "../components/Pesquisa";
import Footer from "../components/template/Footer/Footer";
import Header from "../components/template/Header/Header";
import { AuthContext } from "../contexts/Auth";

export default function PrivateLayout() {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
