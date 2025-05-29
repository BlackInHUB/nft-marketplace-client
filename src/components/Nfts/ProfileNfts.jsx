import { NftsList } from '../NftsList/NftsList';
import { useNfts } from '../../hooks/useNfts';
import { useState } from 'react';
import { ProfileNftsTabBar } from '../TabBars/ProfileNftsTabBar';
import { PaddingWrapper, SectionWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';
import { CollectionList } from '../CollectionList/CollectionList';

export const ProfileNfts = () => {
  const [category, setCategory] = useState('created');
  const { profileNft } = useNfts();

  return (
    <>
      <PaddingWrapper pt="0" pb="0">
        <ProfileNftsTabBar nfts={profileNft} setCategory={setCategory} category={category} />
      </PaddingWrapper>
      <SectionWrapper bgColor="secondary">
        <PaddingWrapper>
          {category !== 'collection' ? (
            <NftsList nfts={profileNft[category]} bg="main" />
          ) : (
            <CollectionList collections={profileNft.collections} />
          )}
        </PaddingWrapper>
      </SectionWrapper>
    </>
  );
};
