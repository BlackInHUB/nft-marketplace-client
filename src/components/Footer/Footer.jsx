import { PaddingWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';
import {
  FooterSctn,
  FooterContainer,
  ContactContainer,
  NavContainer,
  DigestContainer,
  Info,
  GHlink,
  Titles,
  NavList,
  NavListItem,
  NavListItemLink,
  AllRights,
} from './Footer.styled';
import {
  DigestForm,
  DigestFormInput,
  DigestFormBtn,
  DigestFormBtnIcon,
} from '../MainPageComponents/MainPageComponents.styled';
import { Logo } from '../Logo/Logo';
import { UserSocialList } from '../UserSocialList/UserSocialList';
import { useState } from 'react';

const socialLinks = [
  'https://youtube.com',
  'https://discord.com',
  'https://instagram.com',
  'https://facebook.com',
];

export const Footer = () => {
  const [submit, setSubmit] = useState(false);

  const handleDigestSubmit = e => {
    e.preventDefault();

    setSubmit(!submit);
  };

  return (
    <FooterSctn>
      <PaddingWrapper>
        <FooterContainer>
          <ContactContainer>
            <Logo footer="true" />
            <Info>
              NFT marketplace UI created with Anima for Figma and developed by{' '}
              <GHlink
                href="https://github.com/BlackInHUB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Black
              </GHlink>
              .
            </Info>
            <Info mb="15px">Join our community</Info>
            <UserSocialList socialLinks={socialLinks} footer="true" />
          </ContactContainer>
          <NavContainer>
            <Titles>Explore</Titles>
            <NavList>
              <NavListItem>
                <NavListItemLink to="/marketplace">Marketplace</NavListItemLink>
              </NavListItem>
              <NavListItem>
                <NavListItemLink to="/rankings">Rankings</NavListItemLink>
              </NavListItem>
            </NavList>
          </NavContainer>
          <DigestContainer>
            <Titles>Join Our Weekly Digest</Titles>
            <Info mb="20px">Get exclusive promotions & updates straight to your inbox.</Info>
            <DigestForm>
              <DigestFormInput type="text" submit={submit} placeholder="Enter your email here" />
              <DigestFormBtn type="submit" submit={submit} onClick={handleDigestSubmit}>
                <DigestFormBtnIcon /> Subscribe
              </DigestFormBtn>
            </DigestForm>
          </DigestContainer>
        </FooterContainer>
        <AllRights>&#169; NFT Market. Use this template freely.</AllRights>
      </PaddingWrapper>
    </FooterSctn>
  );
};
