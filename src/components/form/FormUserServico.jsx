import { useState } from "react"
import GridServico from "../grid/GridServico";

const Servico = () => {
    const [serv, setServ] = useState({
        anuncio: '',
        nome_fantasia: '',
        cnpj: '',
        descricao:'',
        avaliacao: '',
        disponibilidade: '',
        tipo:'',
        valor:'',
        cidade: ''
    })

    const setdata = (e)=> {
        console.log(e.target.value);
        const { servico, value} = e.target;
        setServ((preval)=> {
            return {
                ...preval, 
                [servico]:value
            }
        })
    }
    return (
        <div className="container">
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="anuncio" className="form-label">Anuncio</label>
                        <input type="text" defaultValue={serv.anuncio} onChange={setdata} name="anuncio" className="form-control" id="anuncio" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="nome_fantasia" className="form-label">Nome Fantasia</label>
                        <input type="text" defaultValue={serv.nome_fantasia} onChange={setdata} name="nome_fantasia" className="form-control" id="nome_fantasia" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="cnpj" className="form-label">CNPJ</label>
                        <input type="text" defaultValue={serv.cnpj} onChange={setdata} name="cnpj" className="form-control" id="cnpj" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="descricao" className="form-label">Descrição</label>
                        <input type="text" defaultValue={serv.descricao} onChange={setdata} name="descricao" className="form-control" id="descricao" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="avaliacao" className="form-label">Avaliação</label>
                        <input type="text" defaultValue={serv.avaliacao} onChange={setdata} name="avaliacao" className="form-control" id="avaliacao" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="disponibilidade" className="form-label">Disponibilidade</label>
                        <input type="text" defaultValue={serv.disponibilidade} onChange={setdata} name="disponibilidade" className="form-control" id="disponibilidade" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="tipo" className="form-label">Tipo</label>
                        <input type="text" defaultValue={serv.tipo} onChange={setdata} name="tipo" className="form-control" id="tipo" required />
                    </div>
                    <div className="mb-3 col-lg-2 col-md-6 col-12">
                        <label htmlFor="valor" className="form-label">Valor</label>
                        <input type="number" defaultValue={serv.valor} onChange={setdata} name="valor" className="form-control" id="valor" required />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-6 col-12">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input type="text" defaultValue={serv.cidade} onChange={setdata} name="cidade" className="form-control" id="cidade" required />
                    </div>
                  </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
            <hr />
            <GridServico />
        </div>
    )
}

export default Servico