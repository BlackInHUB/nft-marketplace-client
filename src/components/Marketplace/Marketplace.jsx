import MarketNfts from './MarketNfts';
import MarketCollections from './MarketCollections';
import { useOutletContext, useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { SectionWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';

const Marketplace = () => {
  const { category } = useParams();
  const { params } = useOutletContext();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (params) {
      setSearchParams(params);
    } else {
      setSearchParams();
    }
  }, [params, setSearchParams]);

  return (
    <SectionWrapper>
      {category === 'nfts' && <MarketNfts />}
      {category === 'collections' && <MarketCollections />}
    </SectionWrapper>
  );
};

export default Marketplace;
