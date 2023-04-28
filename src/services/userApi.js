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

export const update = async (userData) => {
    const {data} = await instance.patch('/user/update', userData);
    return data;
};

export const refresh = async (token) => {
    setToken(token);
    const {data} = await instance.get('/user/current')
    return data;
};

export const getAll = async () => {
    const {data} = await instance.get('/user/all');
    return data;
};

export const getProfile = async (_id) => {
    const {data} = await instance.get(`/user/profile/${_id}`);
    return data;
};

export const following = async (_id) => {
    const {data} = await instance.get(`/user/following/${_id}`);
    return data;
};