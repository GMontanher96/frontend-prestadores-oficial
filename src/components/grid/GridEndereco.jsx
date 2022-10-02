import { Table } from "react-bootstrap";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { AddressContext } from "../../contexts/AddressAuth";
import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { api, createSession } from "../../services/api";

export const AuthContext = createContext(); // area reservada para gravar certas informações.

const GridEndereco = () => {

  const [ enderecos, setEnderecos ] = useState([]);
  const [user, setUser] = useState(null);


  useEffect(() => {
    getEnderecos();
  },[]);

  const getEnderecos = async () => {
    const { res } = await api.get(`/users/${enderecos.user_id}/enderecos`);
    console.log("getEnderecos", res);
    setEnderecos(res);
  };




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
        
      </tbody>
      </Table>
    )
}

export default GridEndereco;