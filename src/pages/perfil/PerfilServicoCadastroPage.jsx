import { useState } from "react"

const Servico = () => {
    const [end, setEnd] = useState({
        endereco: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: '',
        numero: '',
        referencia: ''
    })

    const setdata = (e)=> {
        console.log(e.target.value);
        const { endereco, value} = e.target;
        setEnd((preval)=> {
            return {
                ...preval, 
                [endereco]:value
            }
        })
    }
    return (
        <div className="container form-cad-anuncio">
                  <h2>Cadastro de Serviço</h2>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="endereco" className="form-label">Anuncio</label>
                        <input type="text" defaultValue={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="endereco" className="form-label">Nome Fantasia</label>
                        <input type="text" defaultValue={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="endereco" className="form-label">CNPJ</label>
                        <input type="text" defaultValue={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="endereco" className="form-label">Descrição</label>
                        <input type="text" defaultValue={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="endereco" className="form-label">Avaliação</label>
                        <input type="text" defaultValue={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="endereco" className="form-label">Disponibilidade</label>
                        <input type="text" defaultValue={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="endereco" className="form-label">Tipo</label>
                        <input type="text" defaultValue={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                    <div className="mb-3 col-lg-2 col-md-6 col-12">
                        <label htmlFor="endereco" className="form-label">Valor</label>
                        <input type="number" defaultValue={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-6 col-12">
                        <label htmlFor="endereco" className="form-label">Cidade</label>
                        <input type="text" defaultValue={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                  </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
            <hr />
        </div>
    )
}

export default Servico