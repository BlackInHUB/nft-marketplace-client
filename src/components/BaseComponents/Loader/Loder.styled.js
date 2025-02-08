import styled from 'styled-components';
import theme from '../../../utils/theme';

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: ${theme.colors.backdrop};
`;
