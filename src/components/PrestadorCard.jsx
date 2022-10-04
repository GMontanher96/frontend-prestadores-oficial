import { Card, Button } from "react-bootstrap";
import { Rate } from 'rsuite';
import Accordion from 'react-bootstrap/Accordion';


export default function PrestadorCard({ prestador }) {
  if (!prestador) return <div>Nenhum prestador</div>;
  return (
    <Card className="cardServ p-3">
      <Card.Img className="img-fluid" variant="top" src={prestador.imagem} />
      <Card.Body>
        Empresa:<Card.Title>{prestador.nome_fantasia}</Card.Title>
        Descrição:<Card.Text>{prestador.descricao}</Card.Text>
        Cidade:<Card.Text>{prestador.cidade}</Card.Text>
        Disponibilidade:<Card.Text>{prestador.disponibilidade}</Card.Text>
        Avaliação:<Rate readOnly defaultValue={3.5} allowHalf />
      </Card.Body>
      <Card.Body>
      <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Detalhes</Accordion.Header>
        <Accordion.Body>
        CNPJ:<Card.Text>{prestador.cnpj}</Card.Text>
        Tipo de Serviço:<Card.Text>{prestador.tipo}</Card.Text>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Card.Body>
    </Card>
  );
}
