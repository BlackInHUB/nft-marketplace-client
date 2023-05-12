import { useNfts } from "../../hooks/useNfts";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { NftsList } from "../NftsList/NftsList";
import { NftsWrapper } from "../Nfts/Nfts.styled";

const MarketNfts = () => {
    const {allNft} = useNfts();

    return (
        <NftsWrapper>
            <PaddingWrapper>
                <NftsList nfts={allNft} bg='main' />
            </PaddingWrapper>
        </NftsWrapper>
    )
};

export default MarketNfts;