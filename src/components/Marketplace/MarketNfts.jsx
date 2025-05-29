import { useNfts } from '../../hooks/useNfts';
import { PaddingWrapper, SectionWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';
import { NftsList } from '../NftsList/NftsList';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const MarketNfts = () => {
  const { allNft } = useNfts();

  useScrollToTop();

  if (!allNft) {
    return;
  }

  return (
    <SectionWrapper bgColor="secondary">
      <PaddingWrapper>
        <NftsList nfts={allNft} />
      </PaddingWrapper>
    </SectionWrapper>
  );
};

export default MarketNfts;
