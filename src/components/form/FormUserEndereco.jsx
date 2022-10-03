import { useContext, useState } from "react"
import GridEndereco from "../grid/GridEndereco";
import IconButton from '.././template/iconButton';
import { ProfileContext } from "../../contexts/Profile";
const Endereco = () => {
    const {createEndereco, updateEndereco, deleteEndereco} = useContext(ProfileContext);

    const [end, setEnd] = useState({
        endereco: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: '',
        numero: '',
        referencia: '',
    })

    const isNew = !end.id;

    const onEdit = (endereco) => {
        setEnd(endereco);
    }

    const onDelete = async (endereco) => {
        await deleteEndereco(endereco.id);
    }

    // const dataEndereco = {
    //     endereco_id: id,
    //     endereco_endereco: endereco,
    //     endereco_bairro: bairro,
    //     endereco_cep: cep,
    //     endereco_cidade: cidade,
    //     endereco_estado: estado,
    //     endereco_numero: numero,
    //     endereco_referencia: referencia,
    //     endereco_user_id: user_id
    //   };

    //   const updateEndereco = (i) => { // metodo de alteração do endereço do usuário
    //     try {
    //       axios
    //         .put(`http://127.0.0.1:8000/api/users/${i.user_id}`, dataUser)
    //         .then((res) => console.log("success", res));
    //       setUser_name("");
    //       setUser_email("");
    //       setUser_cpf("");
    //       setUser_password("");
    //       setUser_password_confirm("");
    //       setUser_birth_date("");
    //       setUser_sex("");
    //       setUser_fone("");
    //       setUser_fone_whatsapp("");
    //       setUser_receive_offers("");
    //       setUser_receive_offers_whatsapp("");
    //       setUser_status("");
    //       getUserData();
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    
//   const deleteEndereco = () => { // metodo de deletar o endereço do usuário. 
//     try {
//       axios
//         .delete(`http://127.0.0.1:8000/api/users/${i.user_id}`, dataUser)
//         .then((res) => console.log("success", res));
//       getUserData();
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

    const setdata = (e)=> {
        const { name, value} = e.target;
        setEnd((preval)=> {
            return {
                ...preval, 
                [name]:value
            }
        })
    }

    const cadastrar = async (event) => {
        event.preventDefault();

        if (isNew) {
            await createEndereco(end);
        }
        else {
            await updateEndereco(end);
        }

        setEnd({
            endereco: '',
            bairro: '',
            cep: '',
            cidade: '',
            estado: '',
            numero: '',
            referencia: '',
        });
    }

    return (
        <div className="container">
            <form className="mt-4" onSubmit={cadastrar}>
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
                <button type="submit" className="btn btn-primary">{isNew ? "Cadastrar" : "Alterar" }</button>
            </form>
            <hr />
            <GridEndereco cols='12 9 10' onEdit={onEdit} onDelete={onDelete}>
               <IconButton style="primary" icon="plus"></IconButton>
            </GridEndereco>
        </div>
    )
}

export default Endereco