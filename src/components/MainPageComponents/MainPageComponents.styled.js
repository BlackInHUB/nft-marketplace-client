import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Mail } from '../../images/icons/EnvelopeSimple.svg';

const btnAnim = keyframes`
    0% {right: 0;}
    100% {right: 211px;}
`;

const inputAnim = keyframes`
    0% {width: 420px;}
    100% {width: 200px;}
`;

export const BtnLink = styled(NavLink)`
  width: 100%;

  @media (min-width: 768px) {
    width: fit-content;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1280px) {
    gap: 60px;
  }
`;

export const TitleWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 50%;
  }
`;

export const TitleBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.h4};
  line-height: ${p => p.theme.lineHeights.h4};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: 10px;

  @media (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.h3};
    line-height: ${p => p.theme.lineHeights.h3};
  }
`;

export const Description = styled.p``;

export const DigestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (min-width: 834px) {
    background-color: ${p => p.theme.colors.secondary};
    border-radius: ${p => p.theme.radii.normal};
    padding: 40px 30px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const DigestImg = styled.div`
  width: 315px;
  height: 255px;
  background: url(${p => p.img});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${p => p.theme.radii.normal};

  @media (min-width: 768px) {
    width: 300px;
    height: 280px;
  }

  @media (min-width: 1280px) {
    width: 425px;
    height: 310px;
    background-position: center;
  }
`;

export const DigestContentWrapper = styled.div`
  max-width: 300px;

  @media (min-width: 1280px) {
    max-width: 425px;
  }
`;

export const DigestForm = styled.form`
  margin-top: 40px;

  @media (min-width: 1280px) {
    display: flex;
    position: relative;
    align-items: center;
  }
`;

export const DigestFormInput = styled.input`
  font-family: ${p => p.theme.fontFamily.main};
  width: 100%;
  padding: 12px 20px;
  border: ${({ theme }) => theme.borders.main} ${({ theme }) => theme.colors.caption};
  border-radius: ${({ theme }) => theme.radii.normal};
  outline: none;
  margin-bottom: 16px;
  transition: all 250ms ease;

  @media (min-width: 1280px) {
    margin-bottom: 0;
    width: 100%;
    border: none;
    animation: ${p => (p.submit ? inputAnim : '')};
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }

  ::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.main};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
  }

  :hover,
  :focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const DigestFormBtn = styled.button`
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accent};
  width: 100%;
  padding: 10px 0;
  border: ${({ theme }) => theme.borders.main} ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.normal};
  cursor: pointer;

  @media (min-width: 1280px) {
    width: fit-content;
    padding: 10px 50px;
    position: absolute;
    right: 0;
    animation: ${p => (p.submit ? btnAnim : '')};
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
`;

export const DigestFormBtnIcon = styled(Mail)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.text};
  margin-right: 12px;
  transition: all 250ms ease;
`;
