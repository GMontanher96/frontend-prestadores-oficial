import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { AuthContext } from "../contexts/Auth";

export default function UserMenu() {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
      logout();
    };
  return (
    <NavDropdown title="Usuário" id="basic-nav-dropdown">
      <NavDropdown.Item href="/perfil/usuario">Detalhes do Usuário</NavDropdown.Item>
      <NavDropdown.Item href="/perfil/servicos/novo">Novo Serviço</NavDropdown.Item>
      <NavDropdown.Item href="/perfil/servicos">Meus serviços</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={handleLogout}>Sair</NavDropdown.Item>
    </NavDropdown>
  );
}
