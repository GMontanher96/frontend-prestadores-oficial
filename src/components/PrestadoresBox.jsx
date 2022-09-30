import { Tab, Tabs } from "react-bootstrap";
import PrestadorList from "./PrestadorList";

import "../pages/Home/Home.css"

export default function PrestadoresBox({ prestadores }) {
  if (!prestadores) return <div>Carregando ...</div>;
  return (
    <div className="botaoServ prestadores">
      <Tabs
        defaultActiveKey="faxina"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="faxina" title="Faxina">
          <PrestadorList prestadores={prestadores} />
        </Tab>
        <Tab eventKey="pintura" title="Marido de Aluguel">
          <PrestadorList prestadores={prestadores} />
        </Tab>
        <Tab eventKey="manutencao" title="Manutenções">
          <PrestadorList prestadores={prestadores} />
        </Tab>
      </Tabs>
    </div>
  );
}
