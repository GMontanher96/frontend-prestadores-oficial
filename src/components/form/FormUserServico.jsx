import { useContext, useState } from "react"
import GridServico from "../grid/GridServico";
import IconButton from '.././template/iconButton';
import { ProfileContext } from "../../contexts/Profile";
const Servico = () => {
    const {createServico, updateServico, deleteServico} = useContext(ProfileContext);

    const [serv, setServ] = useState({
        anuncio: '',
        nome_fantasia: '',
        cnpj: '',
        descricao: '',
        avaliacao: '',
        disponibilidade: '',
        tipo: '',
        valor: '',
        cidade: ''
    })

    const isNew = !serv.id;

    const onEdit = (servico) => {
        setServ(servico);
    }

    const onDelete = async (servico) => {
        await deleteServico(servico.id);
    }

    const setdata = (e)=> {
        const { name, value} = e.target;
        setServ((preval)=> {
            return {
                ...preval, 
                [name]:value
            }
        })
    }

    const cadastrar = async (event) => {
        event.preventDefault();

        if (isNew) {
            await createServico(serv);
            setServ({
                anuncio: '',
                nome_fantasia: '',
                cnpj: '',
                descricao: '',
                avaliacao: '',
                disponibilidade: '',
                tipo: '',
                valor: '',
                cidade: '',
                });
        }
        else {
            await updateServico(serv);
            setServ({
                anuncio: '',
                nome_fantasia: '',
                cnpj: '',
                descricao: '',
                avaliacao: '',
                disponibilidade: '',
                tipo: '',
                valor: '',
                cidade: '',
                });
        }

        setServ({
        anuncio: '',
        nome_fantasia: '',
        cnpj: '',
        descricao: '',
        avaliacao: '',
        disponibilidade: '',
        tipo: '',
        valor: '',
        cidade: '',
        });
    }

    return (
        <div className="container">
            <form className="mt-4" onSubmit={cadastrar}>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="anuncio" className="form-label">Anuncio</label>
                        <input type="text" defaultValue={serv.anuncio} onChange={setdata} name="anuncio" className="form-control" id="anuncio" required />
                    </div>
                    <div className="mb-3 col-lg-5 col-md-6 col-12">
                        <label htmlFor="nome_fantasia" className="form-label">Nome Fantasia</label>
                        <input type="text" defaultValue={serv.nome_fantasia} onChange={setdata} name="nome_fantasia" className="form-control" id="nome_fantasia" required />
                    </div>
                    <div className="mb-3 col-lg-5 col-md-6 col-12">
                        <label htmlFor="bairro" className="form-label">CNPJ</label>
                        <input type="text" defaultValue={serv.cnpj} onChange={setdata} name="cnpj" className="form-control" id="cnpj" required />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="cep" className="form-label">Descrição</label>
                        <input type="text" defaultValue={serv.descricao} onChange={setdata} name="descricao" className="form-control" id="descricao" required />
                    </div>
                </div>
                <div className="row">
                   
                    <div className="mb-3 col-lg-4 col-md-6 col-12">
                        <label htmlFor="cidade" className="form-label">Avaliação</label>
                        <input type="text" defaultValue={serv.avaliacao} onChange={setdata} name="avaliacao" className="form-control" id="avaliacao" required  disabled/>
                    </div>
                    <div className="mb-3 col-lg-7 col-md-6 col-12">
                        <label htmlFor="estado" className="form-label">Disponibilidade</label>
                        <input type="text" defaultValue={serv.disponibilidade} onChange={setdata} name="disponibilidade" className="form-control" id="disponibilidade" required />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-6 col-12">
                        <label htmlFor="referencia" className="form-label">Tipo Serviço</label>
                        <input type="text" defaultValue={serv.tipo} onChange={setdata} name="tipo" className="form-control" id="tipo" required />
                    </div>
                    <div className="mb-3 col-lg-3 col-md-6 col-12">
                        <label htmlFor="referencia" className="form-label">Valor</label>
                        <input type="text" defaultValue={serv.valor} onChange={setdata} name="valor" className="form-control" id="valor" required />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-6 col-12">
                        <label htmlFor="referencia" className="form-label">Cidade Atuação</label>
                        <input type="text" defaultValue={serv.cidade} onChange={setdata} name="cidade" className="form-control" id="cidade" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">{isNew ? "Cadastrar" : "Alterar" }</button>
            </form>
            <hr />
            <GridServico cols='12 9 10' onEdit={onEdit} onDelete={onDelete}>
               <IconButton style="primary" icon="plus"></IconButton>
            </GridServico>
        </div>
    )
}

export default Servico