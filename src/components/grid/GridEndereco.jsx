import { Table } from "react-bootstrap";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { AuthContext } from "../../contexts/AuthContext";
import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { api, createSession } from "../../services/api";

const { user } = useContext(AuthContext)

export default function GridEndereco(){

  const [ enderecos, setEnderecos ] = useState([]);

  const getEnderecos = async () => {
    await axios.get(`/users/${user.id}/enderecos`).then((endereco) => {
      setEnderecos(endereco)
    });
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