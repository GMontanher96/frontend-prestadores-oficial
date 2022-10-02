import React, { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AddressContext = createContext();


export const AddressProvider = ({ children }) => {
    const [enderecos, setEnderecos] = useState([]);
  
    const getEnderecos = async (user_id) => {
      const { data } = await api.get(`/users/${user_id}/enderecos`);
      console.log("getEnderecos", data);
      setEnderecos(data);
    };
  
    return (
      <AddressContext.Provider value={{ enderecos, getEnderecos }}>
        {children}
      </AddressContext.Provider>
    );
  };
  