import { useNfts } from "../../hooks/useNfts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { NftsList } from "../NftsList/NftsList";
import { NftsWrapper } from "../Nfts/Nfts.styled";
import nftOperations from "../../redux/nft/nftOperations";

const MarketNfts = () => {
    const dispatch = useDispatch();
    const {allNft} = useNfts();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        
        dispatch(nftOperations.getAll());
    }, [dispatch]);

    if (!allNft) {
        return;
    };

    return (
        <NftsWrapper>
            <PaddingWrapper>
                <NftsList nfts={allNft} />
            </PaddingWrapper>
        </NftsWrapper>
    )
};

export default MarketNfts;