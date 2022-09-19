import React from "react";
import { useState } from "react"
import { axios } from "axios";


function Servico() {

  const [values, setValues] = useState();


  const handleChargeValues = (value) => {
  setValues(prevValue=>({
  ...prevValue,
  [value.target.name]: value.target.value,
  }))
};

  const handleClickServico = () => {
    axios.post('http://localhost:3000/servicos', values);
  }

  return (
    <div className="servico-container">
      <div className="register--container">
        <h1>Cadastro de Servico</h1>
        <div>
          <input
            type="text"
            name="anuncio"
            placeholder="anuncio"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>

        <div>
          <input
            type="text"
            name="nomefantasia"
            placeholder="nomefantasia"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>

        <div>
          <input
            type="number"
            name="cnpj"
            placeholder="cnpj"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
       
        <div>
          <input
            type="text"
            name="descrisao"
            placeholder="descrisao"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="disponibilidade"
            placeholder="disponibilidade"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="avaliacao"
            placeholder="avaliacao"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="tipo"
            placeholder="tipo"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="valor"
            placeholder="valor"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="cidade"
            placeholder="cidade"
            className="register--input"
            onChange={handleChargeValues}
          />
        </div>
        </div>
        <br />
        <button className="register--input" type="button" onClick={() => handleClickServico ()}>Cadastrar</button>
      </div>
  );
}
export default Servico


