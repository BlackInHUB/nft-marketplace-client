import { useNfts } from '../../hooks';
import { CollectionList } from '../CollectionList/CollectionList';
import { PaddingWrapper, SectionWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const MarketCollections = () => {
  const { allCollections } = useNfts();

  useScrollToTop();

  if (!allCollections) {
    return;
  }

  return (
    <SectionWrapper bgColor="secondary">
      <PaddingWrapper>
        <CollectionList collections={allCollections} />
      </PaddingWrapper>
    </SectionWrapper>
  );
};

export default MarketCollections;
