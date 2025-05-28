import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterSctn = styled.div`
  background-color: ${p => p.theme.colors.main};
  font-size: ${p => p.theme.fontSizes.body};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.light};
`;

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: ${({ theme }) => theme.borders.main} ${({ theme }) => theme.colors.caption};

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 50px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 330px;
    margin-bottom: 0px;
  }
`;

export const Info = styled.p`
  margin-top: 20px;
  margin-bottom: ${p => (p.mb ? p.mb : 0)};
`;

export const GHlink = styled.a`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accent};
`;

export const Titles = styled.p`
  font-family: ${p => p.theme.fontFamily.secondary};
  font-size: ${p => p.theme.fontSizes.h5};
  line-height: ${p => p.theme.lineHeights.h5};
  color: ${p => p.theme.colors.text};
`;

export const NavContainer = styled.div`
  margin-bottom: 30px;

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const NavList = styled.ul`
  margin-top: 20px;
`;

export const NavListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const NavListItemLink = styled(NavLink)`
  transition: all 250ms ease;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
  }
`;

export const DigestContainer = styled.div`
  padding-bottom: 30px;

  @media (min-width: 1280px) {
    padding-bottom: 0;
    width: 425px;
  }
`;

export const AllRights = styled.p`
  margin-top: 20px;
  font-size: ${p => p.theme.fontSizes.caption};
  line-height: ${p => p.theme.lineHeights.caption};
`;
