import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  max-width: 375px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 834px;
  }

  @media (min-width: 1280px) {
    max-width: 1440px;
  }
`;

export const OutletContainer = styled.main``;
