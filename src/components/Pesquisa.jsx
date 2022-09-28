import { useState } from "react"
import { Form, FormControl, Button} from "react-bootstrap"

export default function Pesquisa () {
  const [ busca , setBusca ] = useState('');


    return(
        <Form className="d-flex">
              <FormControl
                type="Search"
                placeholder="Procure um prestador próximo de você!"
                aria-label="Search"
                value={busca}
                onChange={(env) => setBusca(env.target.value)}
              />
              <Button variant="secondary m-2 p-2">Pesquisar</Button>
            </Form>
    )
}