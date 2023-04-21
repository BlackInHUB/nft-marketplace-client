import { useSelector } from "react-redux";
import { getAllNft, getUsersNft } from "../redux/nft/nftSelectors";

export const useNfts = () => {
    const usersNft = useSelector(getUsersNft);
    const allNft = useSelector(getAllNft);

    return {usersNft, allNft};
};