import { useState } from "react"
import GridContato from "../grid/GridEndereco";

const Contato = () => {
    const [con, setEnd] = useState({
        telefone: '',
        celular: '',
        
    })

    const setdata = (e)=> {
        console.log(e.target.value);
        const { contato, value} = e.target;
        setEnd((preval)=> {
            return {
                ...preval, 
                [contato]:value
            }
        })
    }
    return (
        <div className="container">
            <form className="mt-4">
                <div className="row">
                    <div className="mb-1 col-lg-2 col-md-6 col-12">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input type="number" placeholder="DDD + n°" defaultValue={con.telefone} onChange={setdata} name="endereco" className="form-control" id="endereco" required />
                    </div>
                    <p/>
                    <div className="mb-3 col-lg-2 col-md-6 col-12">
                        <label htmlFor="celular" className="form-label">Celular</label>
                        <input type="number" placeholder="DDD + n°" defaultValue={con.celular} onChange={setdata} name="numero" className="form-control" id="numero" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
            <hr />
            <GridContato />
        </div>
    )
}

export default Contato