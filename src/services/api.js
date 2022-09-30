import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-novo-prestadores.herokuapp.com/',
});

export const createSession = async (email, password) => {
    return api.post("/signin", { email, password });
}

export const getServicos = async(data) => {
    return api.get(`/users/${data}/servicos`, { data });
}

