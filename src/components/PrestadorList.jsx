import { Col, Row } from "react-bootstrap";
import PrestadorCard from "./PrestadorCard";

export default function PrestadorList({ prestadores }) {
  return (
    <div className="PrestadorList">
      <Row>
        {prestadores.map((prestador) => (
          <Col md={4}>
            <PrestadorCard prestador={prestador} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
