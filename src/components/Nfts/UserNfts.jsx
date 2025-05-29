import { NftsList } from '../NftsList/NftsList';
import { useNfts } from '../../hooks/useNfts';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import nftOperations from '../../redux/nft/nftOperations';
import { UserNftsTabBar } from '../TabBars/UserNftsTabBar';
import { PaddingWrapper, SectionWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';
import { CollectionList } from '../CollectionList/CollectionList';

export const UserNfts = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('created');
  const { usersNft } = useNfts();

  useEffect(() => {
    dispatch(nftOperations.getUsersNft());
  }, [dispatch]);

  return (
    <>
      <PaddingWrapper pt="0" pb="0">
        <UserNftsTabBar setCategory={setCategory} category={category} />
      </PaddingWrapper>
      <SectionWrapper bgColor="secondary">
        <PaddingWrapper>
          {category !== 'collection' ? (
            <NftsList nfts={usersNft[category]} />
          ) : (
            <CollectionList collections={usersNft.collections} />
          )}
        </PaddingWrapper>
      </SectionWrapper>
    </>
  );
};
