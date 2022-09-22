import { Form, FormControl, Button} from "react-bootstrap"
export default function Pesquisa (){
    return(
        <Form className="d-flex">
              <FormControl
                type="Search"
                placeholder="Procure um prestador próximo de você!"
                aria-label="Search"
              />
              <Button variant="secondary m-2 p-2">Pesquisar</Button>
            </Form>
    )
}