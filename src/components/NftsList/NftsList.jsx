import { List, NoInfo } from './NftsList.styled';
import { NftListItem } from './NftListItem/NftListItem';

export const NftsList = ({ nfts, bgColor }) => {
  return (
    <>
      {nfts.length > 0 ? (
        <List>
          {nfts.map((nft, i) => (
            <NftListItem key={nft._id} nft={nft} index={i} bgColor={bgColor} />
          ))}
        </List>
      ) : (
        <NoInfo>We have nothing here, yet..</NoInfo>
      )}
    </>
  );
};
