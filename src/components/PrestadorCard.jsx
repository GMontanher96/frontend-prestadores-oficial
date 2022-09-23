import { Card, Button } from "react-bootstrap";
import Rating from "react-rating";

export default function PrestadorCard({ prestador }) {
  if (!prestador) return <div>Nenhum prestador</div>;
  return (
    <Card className="cardServ p-3">
      <Card.Img className="img-fluid" variant="top" src={prestador.imagem} />
      <Card.Body>
        <Card.Title>{prestador.nome}</Card.Title>
        <Rating placeholderRating={3.5} readonly/>
        <Card.Text>
          <p>
            <i>Faxineira e cozinheira diária e mensal...</i>
          </p>
          <p>2 anos de experiência</p>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button className="btn btn-secondary btn-sm disabled" variant="primary">
          Saiba mais
        </Button>
      </Card.Body>
    </Card>
  );
}
