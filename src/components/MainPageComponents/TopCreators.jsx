import {
  BtnLink,
  TitleWrapper,
  TitleBtnWrapper,
  Title,
  Description,
  ContentWrapper,
} from './MainPageComponents.styled';
import { PaddingWrapper, SectionWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';
import { Button } from '../BaseComponents/Buttons/Button';
import { useMQ, useUsers } from '../../hooks';
import { CreatorsList } from './CreatorsList/CreatorsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from '../../redux/user/userOperations';

export const TopCreators = () => {
  const { isMobile, isTablet } = useMQ();
  const { topCreators } = useUsers();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperations.getTopRanked());
  }, [dispatch]);

  if (!topCreators) {
    return;
  }

  const creatorsToRender = isMobile
    ? topCreators.slice(0, 5)
    : isTablet
    ? topCreators.slice(0, 6)
    : topCreators;

  return (
    <SectionWrapper>
      <PaddingWrapper>
        <ContentWrapper>
          <TitleBtnWrapper>
            <TitleWrapper>
              <Title>Top Creators</Title>
              <Description>Checkout Top Rated Creators on the NFT Marketplace.</Description>
            </TitleWrapper>
            {!isMobile && (
              <BtnLink to="/rankings">
                <Button
                  content="View Rankings"
                  fill="accent"
                  hfill="text"
                  iconType="rocketlaunch"
                  w="24px"
                  h="24px"
                  type="button"
                />
              </BtnLink>
            )}
          </TitleBtnWrapper>
          <CreatorsList items={creatorsToRender} />
          {isMobile && (
            <BtnLink to="/rankings">
              <Button
                width="100%"
                content="View Rankings"
                fill="accent"
                hfill="text"
                iconType="rocketlaunch"
                w="24px"
                h="24px"
                type="button"
              />
            </BtnLink>
          )}
        </ContentWrapper>
      </PaddingWrapper>
    </SectionWrapper>
  );
};
