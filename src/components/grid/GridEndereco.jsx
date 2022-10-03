import { Table } from "react-bootstrap";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { AuthContext } from "../../contexts/Auth";
import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { api, createSession } from "../../services/api";


export default function GridEndereco(){
  const { user } = useContext(AuthContext)

  const [ enderecos, setEnderecos ] = useState([]);
  

     // eslint-disable-next-line react-hooks/rules-of-hooks
     useEffect( () => {
     axios.get(`https://backend-novo-prestadores.herokuapp.com/users/1/enderecos`).then((endereco) => {
        setEnderecos(endereco)
      });
    }, [enderecos]);

 if(!enderecos) {
  return "Carregando endereços"
 }
 console.log(enderecos.bairro)
    return (
        <Table striped bordered hover  responsive="sm">
        <thead>
          <tr>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>CEP</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Número</th>
            <th>Referência</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {enderecos.map((end) => (
          <tr>
            <td>{end.endereco}</td>
            <td>{end.bairro}</td>
            <td>{end.cep}</td>
            <td>{end.cidade}</td>
            <td>{end.estado}</td>
            <td>{end.numero}</td>
            <td>{end.referencia}</td>
          </tr>
        ))}
      </tbody>
      </Table>
    )
}