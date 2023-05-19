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

export const createCollection = async (collection) => {
    const {data} = await instance.post('/collection/create', collection);
    return data;
};

export const getAllCollections = async () => {
    const {data} = await instance.get('/collection');
    return data;
};

export const getCollectionDetails = async (_id) => {
    const {data} = await instance.get(`/collection/details/${_id}`);
    return data;
};

export const updateCollection = async ({_id, collection}) => {
    const {data} = await instance.patch(`/collection/update/${_id}`, collection);
    return data;
};

export const deleteCollection = async (_id) => {
    const {data} = await instance.get(`/collection/delete/${_id}`);
    return {data};
};

export const updateNft = async (update) => {
    const {data} = await instance.patch(`/nfts/update/${update._id}`, update);
    return data;
};

export const deleteNft = async (_id) => {
    const {data} = await instance.get(`/nfts/delete/${_id}`);
    return data;
};

export const getHighLight = async () => {
    const {data} = await instance.get('/nfts/highlight');
    return data;
};

export const getTrendingCollections = async () => {
    const {data} = await instance.get('/collection/trending');
    return data;
};