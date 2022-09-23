import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import Pesquisa from "../components/Pesquisa";
import Footer from "../components/template/Footer/Footer";
import Header from "../components/template/Header/Header";
import { AuthContext } from "../contexts/Auth";

export default function PublicLayout () {

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
