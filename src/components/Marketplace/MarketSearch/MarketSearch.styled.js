import styled from 'styled-components';

export const SearchContainer = styled.div`
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-bottom: 80px;
  }
`;

export const SearchTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.h4};
  line-height: ${p => p.theme.lineHeights.h4};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.h3};
    line-height: ${p => p.theme.lineHeights.h3};
  }

  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.h2};
    line-height: ${p => p.theme.lineHeights.h2};
  }
`;

export const SearchText = styled.p`
  margin-bottom: 30px;

  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
  }
`;

export const SearchForm = styled.form`
  position: relative;
`;

export const SearchFormInput = styled.input`
  font-family: ${({ theme }) => theme.fontFamily.main};
  font-size: ${p => p.theme.fontSizes.body};
  width: 100%;
  outline: none;
  background-color: transparent;
  padding: 20px 70px 20px 20px;
  border: ${p => p.theme.borders.thin} ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.text};
  transition: all 250 ease;

  &:hover,
  :focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    font-family: ${p => p.theme.fontFamily.main};
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.caption};
  }
`;
