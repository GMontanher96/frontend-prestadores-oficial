import { Button, Table } from "react-bootstrap";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { useState, useEffect, useContext, createContext } from "react";
import { ProfileContext } from "../../contexts/Profile";

export default function GridEndereco({ onEdit, onDelete }) {
  const {enderecos, getEnderecos} = useContext(ProfileContext);

  useEffect(() => {
    getEnderecos();
  }, []);

  if (!enderecos) {
    return "Carregando endereços";
  }
  return (
    <Table striped bordered hover responsive="sm">
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
          <tr key={end.id}>
            <td>{end.endereco}</td>
            <td>{end.bairro}</td>
            <td>{end.cep}</td>
            <td>{end.cidade}</td>
            <td>{end.estado}</td>
            <td>{end.numero}</td>
            <td>{end.referencia}</td>
            <td>
              <Button variant="warning" className="mr-2" onClick={() => onEdit(end)}>
                <i className="fa fa-edit"></i>
              </Button>
              <Button variant="danger" className="mr-2" onClick={() => onDelete(end)}>
                <i className="fa fa-trash"></i>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
