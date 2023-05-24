import { useNfts } from "../../hooks/useNfts";
import { useEffect } from "react";

import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { NftsList } from "../NftsList/NftsList";
import { NftsWrapper } from "../Nfts/Nfts.styled";


const MarketNfts = () => {
    const {allNft} = useNfts();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);

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