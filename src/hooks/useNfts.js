import { useSelector } from "react-redux";
import { getAllNft, getUsersNft, getDetails, getProfileNft, getAllCollections, getCollectionDetails } from "../redux/nft/nftSelectors";

export const useNfts = () => {
    const usersNft = useSelector(getUsersNft);
    const allNft = useSelector(getAllNft);
    const nftDetails = useSelector(getDetails);
    const profileNft = useSelector(getProfileNft);
    const allCollections = useSelector(getAllCollections);
    const collectionDetails = useSelector(getCollectionDetails);

    return {usersNft, allNft, nftDetails, profileNft, allCollections, collectionDetails};
};