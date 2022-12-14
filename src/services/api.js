import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-novo-prestadores.herokuapp.com/',
 // baseURL: 'http://localhost:4000/',
});

export const createSession = async (email, password) => {
    return api.post("/signin", { email, password });
}

export const getServicos = async(data) => {
    return api.get(`/users/${data}/servicos`, { data });
}

export const getEnderecos = async(user_id) => {
  return api.get(`/users/${user_id}/enderecos`, { user_id });
}

export const getContatos = async(user_id) => {
  return api.get(`/users/${user_id}/contatos`, { user_id });
}


