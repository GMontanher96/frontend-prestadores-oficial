import { Tab, Tabs } from "react-bootstrap";
import PrestadorList from "./PrestadorList";

import "../pages/Home/Home.css";

export default function PrestadoresBox({ prestadores }) {
  if (!prestadores) return <div>Carregando ...</div>;

  const tipos = [];
  prestadores.forEach((prestador) => {
    const i = tipos.findIndex((tipo) => tipo.tipo == prestador.tipo);
    if (i < 0) {
      tipos.push({
        tipo: prestador.tipo,
        prestadores: [prestador],
      });
    } else {
      tipos[i].prestadores.push(prestador);
    }
  });
  console.log(tipos);
  return (
    <div className="botaoServ prestadores">
      <Tabs
        // defaultActiveKey="faxina"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        {tipos.map((tipo) => (
          <Tab eventKey={tipo.tipo} title={tipo.tipo}>
            <PrestadorList prestadores={tipo.prestadores} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
