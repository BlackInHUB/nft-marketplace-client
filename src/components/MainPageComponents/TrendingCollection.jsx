import { useMQ, useNfts } from '../../hooks';
import { CollectionList } from '../CollectionList/CollectionList';
import {
  Container,
  TitleWrapper,
  TitleBtnWrapper,
  Title,
  Description,
  BtnLink,
  ContentWrapper,
} from './MainPageComponents.styled';
import { PaddingWrapper } from '../BaseComponents/PaddingWrapper/PaddingWrapper.styled';
import { Button } from '../BaseComponents/Buttons/Button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import nftOperations from '../../redux/nft/nftOperations';

export const TrendingCollection = () => {
  const { trendingCollections } = useNfts();
  const { isMobile, isTablet } = useMQ();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nftOperations.getTrendingCollections());
  }, [dispatch]);

  if (!trendingCollections) {
    return;
  }

  return (
    <Container bgColor="background">
      <PaddingWrapper>
        <ContentWrapper>
          <TitleBtnWrapper>
            <TitleWrapper>
              <Title>Trending Collection</Title>
              <Description>Checkout our weekly updated trending collection.</Description>
            </TitleWrapper>
            {!isMobile && (
              <BtnLink to="/marketplace/collections">
                <Button
                  content="View Collections"
                  fill="accent"
                  hfill="text"
                  iconType="copy"
                  w="24px"
                  h="24px"
                  type="button"
                />
              </BtnLink>
            )}
          </TitleBtnWrapper>
          <CollectionList
            collections={
              isMobile
                ? trendingCollections.slice(0, 1)
                : isTablet
                ? trendingCollections.slice(0, 2)
                : trendingCollections
            }
          />
          {isMobile && (
            <BtnLink to="/marketplace/collections">
              <Button
                content="View Collections"
                fill="accent"
                hfill="text"
                iconType="copy"
                w="24px"
                h="24px"
                type="button"
              />
            </BtnLink>
          )}
        </ContentWrapper>
      </PaddingWrapper>
    </Container>
  );
};
