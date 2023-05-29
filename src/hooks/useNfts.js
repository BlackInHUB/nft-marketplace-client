import { useSelector } from "react-redux";
import {
    getAllNft,
    getUsersNft,
    getDetails,
    getProfileNft,
    getTrendingCollections,
    getHighlight,
    getAllCollections,
    getCollectionDetails,
    getNftsLoading,
    getTrendingNfts,
    getLoadingNft
} from "../redux/nft/nftSelectors";

export const useNfts = () => {
    const usersNft = useSelector(getUsersNft);
    const allNft = useSelector(getAllNft);
    const nftDetails = useSelector(getDetails);
    const profileNft = useSelector(getProfileNft);
    const allCollections = useSelector(getAllCollections);
    const collectionDetails = useSelector(getCollectionDetails);
    const nftsLoading = useSelector(getNftsLoading);
    const highlight = useSelector(getHighlight);
    const trendingCollections = useSelector(getTrendingCollections);
    const trendingNfts = useSelector(getTrendingNfts);
    const isLoadingNfts = useSelector(getLoadingNft);

    return {
        usersNft,
        allNft,
        nftDetails,
        highlight,
        profileNft,
        trendingCollections,
        allCollections,
        collectionDetails,
        nftsLoading,
        trendingNfts,
        isLoadingNfts
    };
};