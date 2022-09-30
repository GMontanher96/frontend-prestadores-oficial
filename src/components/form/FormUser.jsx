import { useState } from "react"

const registerEndereco = () => {
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
        const { name, value} = e.target;
    }
    return (
        <div className="container">
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="endereco" className="form-label">Endereco</label>
                        <input type="text" value={end.endereco} onChange={setdata} name="endereco" className="form-control" id="endereco" />
                    </div>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}