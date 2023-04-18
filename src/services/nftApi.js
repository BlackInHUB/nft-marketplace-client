import { instance } from "./userApi";

export const add = async (newNft) => {
    const {data} = await instance.post('/nft/add', newNft);
    return data;
};