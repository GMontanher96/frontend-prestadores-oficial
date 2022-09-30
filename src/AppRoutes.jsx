import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useContext } from "react";
import Login from "./pages/Login/Login";
import Signin from "./pages/Login/Signin";
import Home from "./pages/Home/Home";
import Prestador from "./pages/Prestador/Prestador";
// import Pessoa from "./pages/Pessoa/Pessoa";

import { AuthProvider } from "./contexts/Auth";
import PublicLayout from "./layouts/PublicLayout";
import PerfilPage from "./pages/perfil/PerfilPage";
import PerfilServicoPage from "./pages/perfil/PerfilServicoPage";
import PerfilDetailsUserPage from "./pages/perfil/DetailsUser";
import PerfilServicoCadastroPage from "./pages/perfil/PerfilServicoCadastroPage";
import ServicoPage from "./pages/ServicoPage";
import PrivateLayout from "./layouts/PrivateLayout";
import { HomeProvider } from "./contexts/Home";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <HomeProvider>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/register" element={<Signin />} />

            <Route exact path="/" element={<PublicLayout />}>
              <Route path="" element={<Home />} />
              <Route exact path="prestador" element={<Prestador />} />
              <Route exact path="servicos" element={<ServicoPage />} />
            </Route>

            <Route exact path="/perfil" element={<PrivateLayout />}>
              <Route path="" element={<PerfilPage />} />
              <Route exact path="servicos" element={<PerfilServicoPage />} />
              <Route
                exact
                path="servicos/novo"
                element={<PerfilServicoCadastroPage />}
              />
            </Route>

            <Route exact path="/perfil" element={<PrivateLayout />}>
              <Route exact path="usuario" element={<PerfilDetailsUserPage />} />
              <Route
                exact
                path="usuario/:id"
                element={<PerfilDetailsUserPage />}
              />
              <Route
                exact
                path="usuario/:id"
                element={<PerfilDetailsUserPage />}
              />
            </Route>
          </Routes>
        </HomeProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
