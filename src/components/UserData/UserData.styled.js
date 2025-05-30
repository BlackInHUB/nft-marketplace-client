import styled from 'styled-components';
import defaultCover from '../../images/defaultCover.jpg';
import { AiOutlineEdit } from 'react-icons/ai';
import { ReactComponent as Question } from '../../images/icons/Question.svg';

export const CoverWrapper = styled.div`
  width: 100vw;
  position: relative;
  background: ${p => (p.background ? `url(${p.background})` : `url(${defaultCover})`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 250px;
  opacity: ${p => (p.show ? '1' : '0')};
  transform: ${p => (p.show ? 'translate(0, 0)' : 'translate(0, -100%)')};
  transition: all 500ms ease;

  @media (min-width: 768px) {
    height: 280px;
  }

  @media (min-width: 1280px) {
    height: 320px;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  opacity: ${p => (p.show ? '1' : '0')};
  transform: ${p => (p.show ? 'translate(0, 0)' : 'translate(0, 100%)')};
  transition: all 500ms ease;
  padding-top: 30px;

  @media (min-width: 768px) {
    margin-top: -40px;
  }
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.secondary};
  top: -100px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 120px;
  height: 120px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.main} ${p => p.theme.colors.accent};
  overflow: hidden;

  @media (min-width: 768px) {
    left: 72px;
    transform: translate(0, 0);
  }

  @media (min-width: 1280px) {
    left: 115px;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: cover;
`;

export const DefaultAvatar = styled(Question)`
  width: 50%;
`;

export const UsernameBtnsWrapper = styled.div`
  gap: 30px;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MainBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const Username = styled.h2`
  font-size: ${p => p.theme.fontSizes.h4};
  line-height: ${p => p.theme.lineHeights.h4};
  font-weight: ${p => p.theme.fontWeights.bold};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.h3};
    line-height: ${p => p.theme.lineHeights.h3};
  }

  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.h2};
    line-height: ${p => p.theme.lineHeights.h2};
  }
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media (min-width: 768px) {
    gap: 20px;
    justify-content: start;
  }
`;

export const InfoListItem = styled.li`
  width: 110px;

  @media (min-width: 768px) {
    width: 160px;
  }
`;

export const InfoListItemNumber = styled.p`
  font-family: ${p => p.theme.fontFamily.secondary};
  font-weight: ${p => p.theme.fontWeights.boldest};
  font-size: ${p => p.theme.fontSizes.h5};
  line-height: ${p => p.theme.lineHeights.h5};

  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.h4};
    line-height: ${p => p.theme.lineHeights.h4};
  }
`;

export const InfoListItemText = styled.p`
  font-size: ${p => p.theme.fontSizes.body};
  line-height: ${p => p.theme.lineHeights.body};

  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
  }
`;

export const DetailsWrapper = styled.div`
  margin-bottom: ${p => p.mb};
  margin-top: ${p => p.mt};
`;

export const DetailsTitle = styled.p`
  display: block;
  font-family: ${p => p.theme.fontFamily.secondary};
  font-size: ${p => p.theme.fontSizes.body};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.caption};
  font-weight: ${p => p.theme.fontWeights.boldest};

  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
  }
`;

export const BioText = styled.p`
  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
  }
`;

export const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  transition: all 250ms ease;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
  }
`;

export const FileInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const EditIcon = styled(AiOutlineEdit)`
  fill: ${p => p.theme.colors.text};
  width: 50px;
  height: auto;
  margin-right: 10px;
  transition: all 250ms ease;

  ${FileInputLabel}:hover & {
    fill: ${p => p.theme.colors.accent};
  }
  ${FileInputLabel}:focus & {
    fill: ${p => p.theme.colors.accent};
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 30px;

  @media (min-width: 1280px) {
    margin-bottom: 0;
    width: 40%;
  }
`;

export const EditBtnWrapper = styled.div`
  position: absolute;
  right: 30px;
  bottom: 0;

  @media (min-width: 768px) {
    right: 72px;
  }

  @media (min-width: 1280px) {
    right: 115px;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
