import { useSelector } from "react-redux";
import { getAllNft, getUsersNft, getDetails, getProfileNft } from "../redux/nft/nftSelectors";

export const useNfts = () => {
    const usersNft = useSelector(getUsersNft);
    const allNft = useSelector(getAllNft);
    const nftDetails = useSelector(getDetails);
    const profileNft = useSelector(getProfileNft);

    return {usersNft, allNft, nftDetails, profileNft};
};