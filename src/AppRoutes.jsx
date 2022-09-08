import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useContext } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Servico from "./pages/Servico/Servico";
import Prestador from "./pages/Prestador/Prestador";
import Pessoa from "./pages/Pessoa/Pessoa";


import { AuthProvider, AuthContext } from "./contexts/Auth";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route
            exact
            path="/prestador"
            element={
              <Private>
                <Prestador />
              </Private>
            }
          />
          <Route
            exact
            path="/pessoa"
            element={
              <Private>
                <Pessoa />
              </Private>
            }
          />
          <Route
            exact
            path="/servico"
            element={
              <Private>
                <Servico />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
