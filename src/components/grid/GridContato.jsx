import { Button, Table } from "react-bootstrap";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { useState, useEffect, useContext, createContext } from "react";
import { ProfileContext } from "../../contexts/Profile";

export default function Contato({ onEdit, onDelete }) {
  const {contatos, getContatos} = useContext(ProfileContext);

  useEffect(() => {
    getContatos();
  }, []);

  if (!contatos) {
    return "Carregando contatos..";
  }
  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>Telefone</th>
          <th>Celular</th>
        </tr>
      </thead>
      <tbody>
        {contatos.map((con) => (
          <tr key={con.id}>
            <td>{con.telefone}</td>
            <td>{con.celular}</td>
       
            <td>
              <Button variant="warning" className="mr-2" onClick={() => onEdit(con)}>
                <i className="fa fa-edit"></i>
              </Button>
              <Button variant="danger" className="mr-2" onClick={() => onDelete(con)}>
                <i className="fa fa-trash"></i>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
