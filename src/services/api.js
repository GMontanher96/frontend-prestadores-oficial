import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const createSession = async (email, password) => {
    return api.post("/signin", { email, password });
}

export const getUsers = async() => {
    return api.get("/users");
}

export const getServicos = async() => {
    return api.get("/servicos");
}