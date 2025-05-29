import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100vw;
  overflow: hidden;
  background-color: ${props =>
    props.bgColor ? props.theme.colors[props.bgColor] : props.theme.colors.main};
`;

export const PaddingWrapper = styled.div`
  padding-top: ${props => (props.pt ? props.pt : '40px')};
  padding-bottom: ${props => (props.pb ? props.pb : '40px')};
  padding-left: 30px;
  padding-right: 30px;
  max-width: 375px;
  margin: 0 auto;
  /* overflow: hidden; */

  @media (min-width: 768px) {
    padding-top: ${props => (props.pt ? props.pt : '80px')};
    padding-bottom: ${props => (props.pb ? props.pb : '80px')};
    padding-left: 72px;
    padding-right: 72px;
    max-width: 834px;
  }

  @media (min-width: 1280px) {
    padding-top: ${props => (props.pt ? props.pt : '80px')};
    padding-bottom: ${props => (props.pb ? props.pb : '80px')};
    padding-left: 195px;
    padding-right: 195px;
    max-width: 1440px;
  }
`;
