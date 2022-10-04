import React, { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import { AuthContext } from "./Auth";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [enderecos, setEnderecos] = useState([]);
  const [contatos, setContatos] = useState([]);

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
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
