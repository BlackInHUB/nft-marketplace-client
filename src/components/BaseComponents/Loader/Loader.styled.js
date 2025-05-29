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
  max-width: 90%;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-shadow: -1px -1px 0 ${({ theme }) => theme.colors.accent},
    1px -1px 0 ${({ theme }) => theme.colors.accent},
    -1px 1px 0 ${({ theme }) => theme.colors.accent},
    1px 1px 0 ${({ theme }) => theme.colors.accent};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }

  @media (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
`;
