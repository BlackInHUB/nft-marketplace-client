import { Suspense, useEffect, useState } from 'react';
import { MarketSearch } from '../components/Marketplace/MarketSearch/MarketSearch';
import { MarketTabBar } from '../components/Marketplace/MarketTabBar/MarketTabBar';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import nftOperations from '../redux/nft/nftOperations';
import {
  SectionWrapper,
  PaddingWrapper,
} from '../components/BaseComponents/Wrappers/Wrappers.styled';

const MarketPage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [params, setParams] = useState(null);

  useEffect(() => {
    dispatch(nftOperations.getAll());
    dispatch(nftOperations.getAllCollections());
  }, [dispatch]);

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    const normalizedSearch = search.trim().toLowerCase();
    setParams({ search });
    dispatch(nftOperations.getAll(normalizedSearch));
    dispatch(nftOperations.getAllCollections(normalizedSearch));
  };

  const handleSearchErase = () => {
    setSearch('');
    setParams(null);
    dispatch(nftOperations.getAll());
    dispatch(nftOperations.getAllCollections());
  };

  return (
    <>
      <SectionWrapper>
        <PaddingWrapper pb="0">
          <MarketSearch
            search={search}
            searchErase={handleSearchErase}
            searchSubmit={handleSearchSubmit}
            searchChange={handleSearchChange}
          />
          <MarketTabBar />
        </PaddingWrapper>
      </SectionWrapper>
      <Suspense>
        <Outlet context={{ params }} />
      </Suspense>
    </>
  );
};

export default MarketPage;
