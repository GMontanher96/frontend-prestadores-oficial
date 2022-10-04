import GridContato from "../grid/GridContato";
import IconButton from "../template/iconButton";
import { useContext, useState } from "react"
import { ProfileContext } from "../../contexts/Profile";

const Contato = () => {
    const {createContato, updateContato, deleteContato} = useContext(ProfileContext);
    const [con, setCon] = useState({
       telefone: '',
       celular: ''
    })

  const isNew = !con.id;

  const onEdit = (contato) => {
    setCon(contato);
  };

  const onDelete = async (contato) => {
    await deleteContato(contato.id);
  };

  const setdata = (e) => {
    const { name, value } = e.target;
    setCon((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const cadastrar = async (event) => {
    event.preventDefault();

    if (isNew) {
      await createContato(con);
    } else {
      await updateContato(con);
    }

    setCon({
      telefone: "",
      celular: "",
    });
  };
  return (
    <div className="container">
      <form className="mt-4" onSubmit={cadastrar}>
        <div className="row">
          <div className="mb-1 col-lg-5 col-md-6 col-12">
            <label htmlFor="telefone" className="form-label">
              Telefone
            </label>
            <input
              type="number"
              placeholder="DDD + n°"
              defaultValue={con.telefone}
              onChange={setdata}
              name="telefone"
              className="form-control"
              id="telefone"
              required
            />
          </div>
          <div className="mb-3 col-lg-5 col-md-6 col-12">
            <label htmlFor="celular" className="form-label">
              Celular
            </label>
            <input
              type="number"
              placeholder="DDD + n°"
              defaultValue={con.celular}
              onChange={setdata}
              name="celular"
              className="form-control"
              id="celular"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {isNew ? "Cadastrar" : "Alterar"}
        </button>
      </form>
      <hr />
      <GridContato cols="12 9 10" onEdit={onEdit} onDelete={onDelete}>
        <IconButton style="primary" icon="plus"></IconButton>
      </GridContato>
    </div>
  );
};

export default Contato;
