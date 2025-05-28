import styled from 'styled-components';
import theme from '../../../utils/theme';

export const LoaderBackdrop = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: ${theme.colors.backdrop};
`;

export const LoaderText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }

  @media (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes.h2};
  }
`;
