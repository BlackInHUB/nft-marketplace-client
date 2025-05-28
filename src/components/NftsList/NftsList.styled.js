import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    gap: 30px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1280px) {
  }
`;

export const NoInfo = styled.p`
  padding: 60px 0;
  font-size: ${p => p.theme.fontSizes.h3};
  line-height: ${p => p.theme.lineHeights.h3};
`;
