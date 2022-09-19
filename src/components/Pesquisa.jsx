import { Form, FormControl, Button} from "react-bootstrap"
export default function Pesquisa (){
    return(
        <Form className="d-flex">
              <FormControl
                type="Search"
                placeholder="Procure um prestador próximo de você!"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Pesquisar</Button>
            </Form>
    )
}