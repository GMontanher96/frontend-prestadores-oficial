import React from "react";
import { useState } from "react"
import { axios } from "axios";


function Usuario() {

  const [values, setValues] = useState();


  const handleChargeValues = (value) => {
  setValues(prevValue=>({
  ...prevValue,
  [value.target.name]: value.target.value,
  }))
};

  const handleClickUsuario = () => {
    axios.post('https://prestaservico-backend.herokuapp.com/users', values);
  }

  return (
    <div className="servico-container">
      <div className="register--container">
        <h1>Cadastro de usuario</h1>
        <div>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>

        <div>
          <input
            type="text"
            name="cpfCnpj"
            placeholder="cpfCnpj"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>

        <div>
          <input
            type="text"
            name="password"
            placeholder="password"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirmpassword"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        </div>
        <br />
        <button className="register--input" type="button" onClick={() => handleClickUsuario ()}>Cadastrar</button>
      </div>
  );
}
export default Usuario

