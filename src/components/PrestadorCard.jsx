import { Card, Button } from "react-bootstrap";
import { Rate } from 'rsuite';

export default function PrestadorCard({ prestador }) {
  if (!prestador) return <div>Nenhum prestador</div>;
  return (
    <Card className="cardServ p-3">
      <Card.Img className="img-fluid" variant="top" src={prestador.imagem} />
      <Card.Body>
        <Card.Title>{prestador.nome_fantasia}</Card.Title>
        <Rate readOnly defaultValue={3.5} allowHalf />
        <Card.Text>{prestador.descricao}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button className="btn btn-secondary btn-sm disabled" variant="primary">
          Saiba mais
        </Button>
      </Card.Body>
    </Card>
  );
}
