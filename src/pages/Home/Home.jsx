import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../contexts/Auth";

import { getUsers } from "../../services/api";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    })();
  }, []);

  const handleLogout = () => {
    logout();
  };

  if(loading) {
    return <div className="loading">Carregando dados....</div>
  }

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>SAIR</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - { user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
