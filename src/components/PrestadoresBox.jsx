import { Tab, Tabs } from "react-bootstrap";
import PrestadorList from "./PrestadorList";

export default function PrestadoresBox({ prestadores }) {
  if (!prestadores) return <div>Carregando ...</div>;
  return (
    <div className="botaoServ">
      <Tabs
        defaultActiveKey="faxina"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="faxina" title="Faxina">
          <PrestadorList prestadores={prestadores} />
        </Tab>
        <Tab eventKey="pintura" title="Pintura">
          <PrestadorList prestadores={prestadores} />
        </Tab>
        <Tab eventKey="manutencao" title="Manutenção">
          <PrestadorList prestadores={prestadores} />
        </Tab>
      </Tabs>
    </div>
  );
}
