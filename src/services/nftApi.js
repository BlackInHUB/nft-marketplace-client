import { instance } from "./userApi";

export const addNft = async (newNft) => {
    const {data} = await instance.post('/nft/add', newNft);
    return data;
};

export const getUsersNft = async (category) => {
    const {data} = await instance.get(`/nft/${category}`);
    return data;
}