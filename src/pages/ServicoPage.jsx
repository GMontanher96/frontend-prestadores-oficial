import { useContext, useEffect, useState } from "react";
import Pesquisa from "../components/Pesquisa";
import PrestadorList from "../components/PrestadorList";
import { HomeContext } from "../contexts/Home";

export default function ServicoPage() {
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
    <>
      <Pesquisa />
      <PrestadorList prestadores={servicos} />
    </>
  );
}
