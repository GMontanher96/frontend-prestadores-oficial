import { useState } from "react";
import Pesquisa from "../components/Pesquisa";
import PrestadoresBox from "../components/PrestadoresBox";

export default function ServicoPage() {
  const [prestadores, setPrestadores] = useState([
    {
      nome: "José da Silva",
      imagem: "",
    },
    {
      nome: "José da Silva 2",
      imagem: "",
    },
    {
      nome: "José da Silva 2",
      imagem: "",
    },
  ]);
  return (
    <>
      <Pesquisa />
      <PrestadoresBox prestadores={prestadores} />
    </>
  );
}
