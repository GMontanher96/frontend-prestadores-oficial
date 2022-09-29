import { useMemo, useState } from "react"
import { Form, FormControl, Button} from "react-bootstrap"

const servico = [
  'faxina',
  'pintura',
  'manutenção',
  'construção',
  'reforma'
];

export default function Pesquisa () {
  const [ busca , setBusca ] = useState('');
  const servicoFiltrados = useMemo (() => {
    const lowerBusca = busca.toLowerCase();
    return servico.filter((servico) => 
    servico.toLowerCase().includes(lowerBusca)
  );
  }, [busca]);
  
    return(
        <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Procure um prestador próximo de você!"
                aria-label="Search"
                value={busca}
                onChange={(env) => setBusca(env.target.value)}
              />
              <Button variant="secondary m-2 p-2">Pesquisar</Button>
            </Form>
    )
}