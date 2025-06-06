import styled from 'styled-components';

export const NftItem = styled.li`
  cursor: pointer;
  background-color: ${props =>
    props.bgColor ? props.theme.colors[props.bgColor] : props.theme.colors.main};
  width: 100%;
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  opacity: ${p => (p.show ? '1;' : '0;')};
  transform: ${p => (p.show ? 'translate(0, 0)' : 'translate(50%, 0)')};
  transition: all 300ms ease;

  @media (min-width: 768px) {
    width: 330px;
    transition-delay: ${props => (props.i + 1) * 10}ms;
  }
`;

export const ImageWrapper = styled.img`
  width: 100%;
  height: 240px;
  /* background: url(${p => p.imageUrl});
  background-repeat: no-repeat; */
  background-size: cover;

  @media (min-width: 768px) {
    height: 295px;
  }
`;

export const ImageSkeleton = styled.div`
  width: 100%;
  height: 240px;
  background: transparent;
`;

export const InfoWrapper = styled.div`
  padding: 20px 20px 25px 20px;

  @media (min-width: 768px) {
    padding: 20px 30px 25px 30px;
  }
`;

export const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes.h5};
  line-height: ${p => p.theme.lineHeights.h5};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const AuthorContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: ${p => p.theme.radii.round};
`;

export const Author = styled.p`
  font-family: ${p => p.theme.fontFamily.secondary};
`;

export const PricesWrapper = styled.div`
  font-family: ${p => p.theme.fontFamily.secondary};
  display: flex;
  justify-content: space-between;
`;

export const PriceWrapper = styled.div``;

export const PriceTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.caption};
  line-height: ${p => p.theme.lineHeights.caption};
  color: ${p => p.theme.colors.caption};
  margin-bottom: 8px;
`;

export const PriceValue = styled.p`
  font-size: ${p => p.theme.fontSizes.caption};
  line-height: ${p => p.theme.lineHeights.caption};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
  }
`;
