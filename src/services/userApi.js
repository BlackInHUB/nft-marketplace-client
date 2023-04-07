import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

const setToken = token => {
    if (token) {
        return instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    };
};

export const register = async (userData) => {
    const {data} = await instance.post('/user/register', userData);
    return data;
};

export const login = async (userData) => {
    const {data} = await instance.post('/user/login', userData);
    setToken(data.token);
    return data;
};

export const logout = async () => {
    await instance.get('/user/logout');
    setToken(null);

    return true;
};