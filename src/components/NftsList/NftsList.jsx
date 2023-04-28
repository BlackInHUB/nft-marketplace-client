import { List, NoInfo } from "./NftsList.styled";
import { NftListItem } from "./NftListItem/NftListItem";

export const NftsList = ({nfts}) => {
    return (
        <>
            {nfts.length > 0 ?
                (<List>
                    {nfts.map(nft => <NftListItem key={nft._id} nft={nft} />)}
                </List>)
            : <NoInfo>We have nothing here, yet..</NoInfo>}
        </>
    )
};