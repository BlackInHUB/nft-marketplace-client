import { TopContainer, TopTitle, TopDescription } from './Rankings.styled';
import { RankingsTabBar } from './RankingsTabBar/RankingsTabBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SectionWrapper, PaddingWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';

export const Rankings = () => {
  return (
    // <div style={{ width: '100vw' }}>
    <SectionWrapper>
      <PaddingWrapper pb="0">
        <TopContainer>
          <TopTitle>Top Creators</TopTitle>
          <TopDescription>Check out top ranking NFT artists on the NFT Marketplace.</TopDescription>
        </TopContainer>
        <RankingsTabBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PaddingWrapper>
    </SectionWrapper>
    // </div>
  );
};
