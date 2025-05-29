import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  gap: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NoInfo = styled.p`
  padding: 60px 0;
  font-size: ${p => p.theme.fontSizes.h3};
  line-height: ${p => p.theme.lineHeights.h3};
`;
