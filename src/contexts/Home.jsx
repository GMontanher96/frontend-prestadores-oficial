import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [servicos, setServicos] = useState([]);

  const getServicos = async () => {
    const { data } = await api.get('/servicos');
    console.log("getServicos", data);
      setServicos(data);
  };

  return (
    <HomeContext.Provider value={{ servicos, getServicos }}>
      {children}
    </HomeContext.Provider>
  );
};
