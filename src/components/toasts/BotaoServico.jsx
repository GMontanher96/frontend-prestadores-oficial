import { Tab, Tabs } from "react-bootstrap";
import PrestadorCard from "./PrestadorCard";

export default function BotaoServico() {
  return (
    <div className="botaoServ">
      <Tabs
        defaultActiveKey="faxina"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="faxina" title="Faxina">
          <PrestadorCard />
        </Tab>
        <Tab eventKey="pintura" title="Pintura">
        <PrestadorCard />
        </Tab>
        <Tab eventKey="manutencao" title="Manutenção">
        <PrestadorCard />
        </Tab>
      </Tabs>
    </div>
  );
}
