import axios from "axios";

const URL = process.env.REACT_APP_BACK_URL;

console.log(URL);

export const instance = axios.create({
  baseURL: URL,
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
};

export const register = async (userData) => {
  const { data } = await instance.post("/user/register", userData);
  return data;
};

export const login = async (userData) => {
  const { data } = await instance.post("/user/login", userData);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  await instance.get("/user/logout");
  setToken(null);

  return true;
};

export const update = async (userData) => {
  const { data } = await instance.patch("/user/update", userData);
  return data;
};

export const refresh = async (token) => {
  setToken(token);
  const { data } = await instance.get("/user/current");
  return data;
};

export const getTopRanked = async () => {
  const { data } = await instance.get("/user/ranked/top");
  return data;
};

export const getRankings = async () => {
  const { data } = await instance.get("/user/ranked/all");
  return data;
};

export const getProfile = async (_id) => {
  const { data } = await instance.get(`/user/profile/${_id}`);
  return data;
};

export const following = async (_id) => {
  const { data } = await instance.get(`/user/following/${_id}`);
  return data;
};
