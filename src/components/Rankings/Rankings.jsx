import { Container, TopContainer, TopTitle, TopDescription } from './Rankings.styled';
import { RankingsTabBar } from './RankingsTabBar/RankingsTabBar';
import { PaddingWrapper } from '../BaseComponents/PaddingWrapper/PaddingWrapper.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Rankings = () => {
  return (
    <Container>
      <PaddingWrapper>
        <TopContainer>
          <TopTitle>Top Creators</TopTitle>
          <TopDescription>Check out top ranking NFT artists on the NFT Marketplace.</TopDescription>
        </TopContainer>
        <RankingsTabBar />
      </PaddingWrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
