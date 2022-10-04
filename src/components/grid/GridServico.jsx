import { Button, Table } from "react-bootstrap";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { useState, useEffect, useContext, createContext } from "react";
import { ProfileContext } from "../../contexts/Profile";

export default function GridServico({ onEdit, onDelete }) {
  const {servicos, getServicos} = useContext(ProfileContext);

  useEffect(() => {
    getServicos();
  }, []);

  if (!servicos) {
    return "Carregando servicos";
  }
  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>Anuncio</th>
          <th>Nome Fantasia</th>
          <th>CNPJ</th>
          <th>Descrição</th>
          <th>Avaliação</th>
          <th>Disponibilidade</th>
          <th>Tipo</th>
          <th>Valor</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        {servicos.map((serv) => (
          <tr key={serv.id}>
            <td>{serv.anuncio}</td>
            <td>{serv.nome_fantasia}</td>
            <td>{serv.cnpj}</td>
            <td>{serv.descricao}</td>
            <td>{serv.avaliacao}</td>
            <td>{serv.disponibilidade}</td>
            <td>{serv.tipo}</td>
            <td>{serv.valor}</td>
            <td>{serv.cidade}</td>
            <td>
              <Button variant="warning" className="mr-2" onClick={() => onEdit(serv)}>
                <i className="fa fa-edit"></i>
              </Button>
              <Button variant="danger" className="mr-2" onClick={() => onDelete(serv)}>
                <i className="fa fa-trash"></i>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
