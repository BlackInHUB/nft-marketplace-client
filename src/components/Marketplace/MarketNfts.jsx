import { useNfts } from "../../hooks/useNfts";
import { NftsList } from "../NftsList/NftsList";

const MarketNfts = () => {
    const {allNft} = useNfts();

    return (
        <NftsList nfts={allNft} />
    )
};

export default MarketNfts;