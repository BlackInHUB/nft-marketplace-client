import { useNfts } from "../../hooks";
import { CollectionList } from "../CollectionList/CollectionList";
import { NftsWrapper } from "../Nfts/Nfts.styled";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";

const MarketCollections = () => {
    const {allCollections} = useNfts();

    return (
        <NftsWrapper>
            <PaddingWrapper>
                <CollectionList collections={allCollections} />
            </PaddingWrapper>
        </NftsWrapper>
    )
};

export default MarketCollections;