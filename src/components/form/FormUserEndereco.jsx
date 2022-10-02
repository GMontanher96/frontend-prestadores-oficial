import { useState } from "react"
import GridEndereco from "../grid/GridEndereco";
import IconButton from '.././template/iconButton';
const Endereco = () => {
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
        <div className="container">
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-5 col-md-6 col-12">
                        <label htmlFor="endereco" className="form-label">Endereço</label>
                        <input type="text" defaultValue={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                    <div className="mb-3 col-lg-2 col-md-6 col-12">
                        <label htmlFor="numero" className="form-label">Número</label>
                        <input type="number" defaultValue={end.numero} onChange={setdata} name="numero" className="form-control" id="numero" required />
                    </div>
                    <div className="mb-3 col-lg-5 col-md-6 col-12">
                        <label htmlFor="bairro" className="form-label">Bairro</label>
                        <input type="text" defaultValue={end.bairro} onChange={setdata} name="bairro" className="form-control" id="bairro" required />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-lg-3 col-md-6 col-12">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input type="text" defaultValue={end.cep} onChange={setdata} name="cep" className="form-control" id="cep" required />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-6 col-12">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input type="text" defaultValue={end.cidade} onChange={setdata} name="cidade" className="form-control" id="cidade" required />
                    </div>
                    <div className="mb-3 col-lg-1 col-md-6 col-12">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <input type="text" defaultValue={end.estado} onChange={setdata} name="estado" className="form-control" id="estado" required />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-6 col-12">
                        <label htmlFor="referencia" className="form-label">Referência</label>
                        <input type="text" defaultValue={end.referencia} onChange={setdata} name="referencia" className="form-control" id="referencia" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
            <hr />
            <GridEndereco cols='12 9 10'>
               <IconButton style="primary" icon="plus"></IconButton>
            </GridEndereco>
        </div>
    )
}

export default Endereco