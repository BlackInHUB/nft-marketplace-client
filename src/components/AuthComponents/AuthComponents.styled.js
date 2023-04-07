import styled from "styled-components";
import mobileImage from '../../images/registerBgMobile.jpg';
import tabletImage from '../../images/registerBgTablet.jpg';
import desktopImage from '../../images/registerBgDesktop.jpg';

export const RegisterContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const ContentWrapper = styled.div`
    opacity: ${p => p.show ? '1' : '0'};
    transform: ${p => p.show ? 'translate(0, 0)' : 'translate(0, 100%)'};
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 67vh; 
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: ${p => p.theme.colors.mainBlack};
    transition: all 500ms ease;


    @media (min-width: 768px) {
        top: 0;
        width: 50%;
        height: 100vh;
        padding: 0 40px;
        transform: ${p => p.show ? 'translate(0, 0)' : 'translate(100%, 0)'};
    }

    @media (min-width: 1280px) {
        padding: 0 60px;
    }
`

export const ImgWrapper = styled.div`
    opacity: ${p => p.show ? '1' : '0'};
    transform: ${p => p.show ? 'translate(0, 0)' : 'translate(0, -100%)'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 33vh;
    background-image: url(${mobileImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 500ms ease;

    @media (min-width: 768px) {
        top: 0;
        width: 50%;
        height: 100vh;
        transform: ${p => p.show ? 'translate(0, 0)' : 'translate(-100%, 0)'};
        background-image: url(${tabletImage});
    }

    @media (min-width: 1280px) {
        background-image: url(${desktopImage});
    }
`

export const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
`

export const RegisterTitle = styled.h2`
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.h3};
    line-height: ${p => p.theme.lineHeights.h3};
    margin-bottom: 20px;

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h2};
        line-height: ${p => p.theme.lineHeights.h2};
    }
`

export const RegisterDescription = styled.p`
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    margin-bottom: 30px;

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.lineHeights.h5};
    }
`