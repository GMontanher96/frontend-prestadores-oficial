import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { AuthContext } from "../contexts/Auth";

export default function UserMenu() {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
      logout();
    };
  return (
    <NavDropdown title="Usuário" id="basic-nav-dropdown" className="bot-nav">
      <NavDropdown.Item href="/perfil/usuario">Configurações</NavDropdown.Item>
      <NavDropdown.Item href="/perfil/servicos/novo">Novo Serviço</NavDropdown.Item>
      <NavDropdown.Item href="/perfil/servicos">Meus serviços</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={handleLogout}>Sair</NavDropdown.Item>
    </NavDropdown>
  );
}
