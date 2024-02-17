import styled from "styled-components";
import mobileImage from "../../images/registerBgMobile.jpg";
import tabletImage from "../../images/registerBgTablet.jpg";
import desktopImage from "../../images/registerBgDesktop.jpg";

export const RegisterContainer = styled.div`
  position: relative;
  min-width: 100%;
  height: calc(100vh - 55px);
  overflow: hidden;

  @media (min-width: 768px) {
    height: calc(100vh - 65px);
  }

  @media (min-width: 1280px) {
    height: calc(100vh - 93px);
  }
`;

export const ContentWrapper = styled.div`
  opacity: ${(p) => (p.show ? "1" : "0")};
  transform: ${(p) => (p.show ? "translate(0, 0)" : "translate(0, 100%)")};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 70%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.secondary};
  transition: all 500ms ease;

  @media (min-width: 768px) {
    width: calc(50vw - ((100vw - 100%) / 2));
    height: 100%;
    padding: 0 40px;
    transform: ${(p) => (p.show ? "translate(0, 0)" : "translate(100%, 0)")};
  }

  @media (min-width: 1280px) {
    padding: 0 60px;
  }
`;

export const ImgWrapper = styled.div`
  opacity: ${(p) => (p.show ? "1" : "0")};
  transform: ${(p) => (p.show ? "translate(0, 0)" : "translate(0, -100%)")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 30%;
  background-image: url(${mobileImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 500ms ease;

  @media (min-width: 768px) {
    top: 0;
    width: calc(50vw - ((100vw - 100%) / 2));
    height: 100%;
    transform: ${(p) => (p.show ? "translate(0, 0)" : "translate(-100%, 0)")};
    background-image: url(${tabletImage});
  }

  @media (min-width: 1280px) {
    background-image: url(${desktopImage});
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const RegisterTitle = styled.h2`
  color: ${(p) => p.theme.colors.text};
  font-size: ${(p) => p.theme.fontSizes.h3};
  line-height: ${(p) => p.theme.lineHeights.h3};
  margin-bottom: 20px;

  @media (min-width: 1280px) {
    font-size: ${(p) => p.theme.fontSizes.h2};
    line-height: ${(p) => p.theme.lineHeights.h2};
  }
`;

export const RegisterDescription = styled.p`
  color: ${(p) => p.theme.colors.text};
  font-size: ${(p) => p.theme.fontSizes.body};
  line-height: ${(p) => p.theme.lineHeights.body};
  margin-bottom: 30px;

  @media (min-width: 1280px) {
    font-size: ${(p) => p.theme.fontSizes.h5};
    line-height: ${(p) => p.theme.lineHeights.h5};
  }
`;
