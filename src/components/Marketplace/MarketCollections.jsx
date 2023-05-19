import { useNfts } from "../../hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CollectionList } from "../CollectionList/CollectionList";
import { NftsWrapper } from "../Nfts/Nfts.styled";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import nftOperations from "../../redux/nft/nftOperations";

const MarketCollections = () => {
    const dispatch = useDispatch();
    const {allCollections} = useNfts();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        
        dispatch(nftOperations.getAllCollections());
    }, [dispatch]);

    if (!allCollections) {
        return;
    };

    return (
        <NftsWrapper>
            <PaddingWrapper>
                <CollectionList collections={allCollections} />
            </PaddingWrapper>
        </NftsWrapper>
    )
};

export default MarketCollections;