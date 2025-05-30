import { PaddingWrapper, SectionWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';
import {
  HeroContainer,
  HeroInfoContainer,
  HeroTitle,
  HeroDescription,
  HeroInfoList,
  HeroInfoListItem,
  HeroInfoListItemNumber,
  HeroInfoListItemText,
  HeroLink,
} from './Hero.styled';
import { Button } from '../BaseComponents/Buttons/Button';
import { Highlight } from '../Highlight/Highlight';
import { useMQ } from '../../hooks/useMQ';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import nftOperations from '../../redux/nft/nftOperations';

export const Hero = () => {
  const { isMobile } = useMQ();
  const [hlShow, setHlShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nftOperations.getHighLight());
    setTimeout(() => {
      setHlShow(true);
    }, 250);
  }, [dispatch]);

  return (
    <SectionWrapper>
      <PaddingWrapper>
        <HeroContainer>
          <HeroInfoContainer>
            <HeroTitle>Discover Digital art & Collect NFTs</HeroTitle>
            <HeroDescription>
              NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more
              than 20k NFT artists.
            </HeroDescription>
            {isMobile && <Highlight show={hlShow} />}
            <HeroLink to="/marketplace">
              <Button
                width={isMobile ? '100%' : 'fit-content'}
                type="button"
                content="Get Started"
                fill="accent"
                hfill="text"
                iconType="rocketlaunch"
              />
            </HeroLink>
            <HeroInfoList>
              <HeroInfoListItem>
                <HeroInfoListItemNumber>240k+</HeroInfoListItemNumber>
                <HeroInfoListItemText>Total Sale</HeroInfoListItemText>
              </HeroInfoListItem>
              <HeroInfoListItem>
                <HeroInfoListItemNumber>100k+</HeroInfoListItemNumber>
                <HeroInfoListItemText>Auctions</HeroInfoListItemText>
              </HeroInfoListItem>
              <HeroInfoListItem>
                <HeroInfoListItemNumber>240k+</HeroInfoListItemNumber>
                <HeroInfoListItemText>Artists</HeroInfoListItemText>
              </HeroInfoListItem>
            </HeroInfoList>
          </HeroInfoContainer>
          {!isMobile && <Highlight show={hlShow} />}
        </HeroContainer>
      </PaddingWrapper>
    </SectionWrapper>
  );
};
