import {
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    Col,
    Row,
  } from "react-bootstrap";
  import img5 from "../../image/5.jpg";
  import img6 from "../../image/6.jpg";
  import img7 from "../../image/7.jpg";
 
  
  export default function PrestadorCard () {
   
        return (
          <div>
            <Row>
            <Col md={4}>
                  <Card className="cardServ p-3">
                    <Card.Img className="img-fluid"  variant="top" src={img5} />
                    <Card.Body>
                        <Card.Title>Gabriela Freire</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                      </ListGroupItem>
                      <Card.Text>
                        <p>
                          <i>Faxineira e cozinheira diária e mensal...</i>
                        </p>
                      </Card.Text>
                      <ListGroupItem>2 anos de experiência</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Button
                        className="btn btn-secondary btn-sm disabled"
                        variant="primary"
                      >
                        Saiba mais
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="cardServ p-3">
                    <Card.Img   class= "img-fluid" variant="top" src={img6} />
                    <Card.Body>
                        <Card.Title>Antônio Silva</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                      </ListGroupItem>
                      <Card.Text>
                        <p>
                          <i>Faxineira e cozinheira diária e mensal...</i>
                        </p>
                      </Card.Text>
                      <ListGroupItem>2 anos de experiência</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Button
                        className="btn btn-secondary btn-sm disabled"
                        variant="primary"
                      >
                        Saiba mais
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="cardServ p-3">
                    <Card.Img className="img-fluid" variant="top" src={img7} />
                    <Card.Body>
                        <Card.Title>Tereza de Jesus</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                      </ListGroupItem>
                      <Card.Text>
                        <p>
                          <i>Faxineira e cozinheira diária e mensal...</i>
                        </p>
                      </Card.Text>
                      <ListGroupItem>2 anos de experiência</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Button
                        className="btn btn-secondary btn-sm disabled"
                        variant="primary"
                      >
                        Saiba mais
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </div>
        );
      }
      