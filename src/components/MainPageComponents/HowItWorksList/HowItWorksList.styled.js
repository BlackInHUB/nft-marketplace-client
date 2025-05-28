import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const ListItem = styled.li`
  background-color: ${p => p.theme.colors.secondary};
  padding: 20px;
  border-radius: ${p => p.theme.radii.normal};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  opacity: ${props => (props.show ? 1 : 0)};
  transform: ${props => (props.show ? 'scale(1)' : 'scale(0)')};
  transition: all 300ms ease;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 210px;
    min-height: 320px;
    transition-delay: ${props => (props.index + 1) * 150}ms;
  }

  @media (min-width: 1280px) {
    padding: 30px;
    width: 330px;
    min-height: 480px;
  }
`;

export const ListItemImg = styled.img`
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
    margin-bottom: 20px;
  }

  @media (min-width: 1280px) {
    width: 250px;
    height: 250px;
  }
`;

export const TextWrapper = styled.div`
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.p`
  font-size: ${p => p.theme.fontSizes.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: 10px;

  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
  }
`;

export const Description = styled.p`
  font-size: ${p => p.theme.fontSizes.caption};
  line-height: ${p => p.theme.lineHeights.caption};

  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
  }
`;
