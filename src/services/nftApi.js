import { instance } from "./userApi";

export const addNft = async (newNft) => {
    const {data} = await instance.post('/nfts/add', newNft);
    return data;
};

export const getUsersNft = async () => {
    const {data} = await instance.get('/nfts/users');
    return data;
};

export const getProfileNft = async (_id) => {
    const {data} = await instance.get(`/nfts/profile/${_id}`);
    return data;
}

export const getDetails = async (_id) => {
    const {data} = await instance.get(`/nfts/nft/${_id}`);
    return data;
};

export const getAll = async () => {
    const {data} = await instance.get('/nfts');
    return data;
};