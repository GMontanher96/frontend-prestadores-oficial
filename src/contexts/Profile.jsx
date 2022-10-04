import React, { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import { AuthContext } from "./Auth";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [enderecos, setEnderecos] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [servicos, setServicos] = useState([]);


  const getEnderecos = async () => {
    const { data } = await api.get(`/users/${user.id}/enderecos`);
    console.log("getEnderecos", data);
    setEnderecos(data);
  };

  const createEndereco = async (endereco) => {
    const response = await api.post(`/users/${user.id}/enderecos`, endereco);
    await getEnderecos();
    return response.data;
  };

  const updateEndereco = async (endereco) => {
    const response = await api.put(
      `/users/${user.id}/enderecos/${endereco.id}`,
      endereco
    );
    await getEnderecos();
    return response.data;
  };

  const deleteEndereco = async (id) => {
    await api.delete(`/users/${user.id}/enderecos/${id}`);
    await getEnderecos();
  };

  // contatos

  const getContatos = async () => {
    const { data } = await api.get(`/users/${user.id}/contatos`);
    console.log("getContatos", data);
    setContatos(data);
  };

  const createContato = async (contato) => {
    const response = await api.post(`/users/${user.id}/contatos`, contato);
    await getContatos();
    return response.data;
  };

  const updateContato = async (contato) => {
    const response = await api.put(
      `/users/${user.id}/contatos/${contato.id}`,
      contato
    );
    await getContatos();
    return response.data;
  };

  const deleteContato = async (id) => {
    await api.delete(`/users/${user.id}/contatos/${id}`);
    await getContatos();
  };

  // metodos de servicos

  const getServicos = async () => {
    const { data } = await api.get(`/users/${user.id}/servicos`);
    console.log("getServicos", data);
    setServicos(data);
  };
  
  const createServico = async (servico) => {
    const response = await api.post(`/users/${user.id}/servicos`, servico);
    await getServicos();
    return response.data;
  };

  const updateServico = async (servico) => {
    const response = await api.post(`/users/${user.id}/servicos/${servico.id}`, servico);
    await getServicos();
    return response.data;
  };

  const deleteServico = async (id) => {
    await api.delete(`/users/${user.id}/servicos/${id}`);
    await getServicos();
  };
  
  return (
    <ProfileContext.Provider
      value={{
        enderecos,
        getEnderecos,
        createEndereco,
        updateEndereco,
        deleteEndereco,
        contatos,
        getContatos,
        createContato,
        updateContato,
        deleteContato,
     , servicos, getServicos, createServico, updateServico, deleteServico }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
