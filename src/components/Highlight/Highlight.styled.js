import styled from "styled-components";
import { keyframes } from "styled-components";

const hlAnimation = keyframes`
    0% {opacity: 0; transform: translate(100%, 0) scale(1.05)}
    80% {opacity: 1; transform: translate(0, 0) scale(1.05)}
    100% {opacity: 1; transform: translate(0, 0) scale(1)}
`

export const HeroHighlightContainer = styled.div`
    min-width: 100%;
    max-width: 500px;
    background-color: ${p => p.theme.colors.secondary};
    border-radius: ${p => p.theme.radii.normal};
    overflow: hidden;
    margin-bottom: 40px;
    animation: ${hlAnimation};
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
    cursor: pointer;

    @media (min-width: 768px) {
        min-width: 330px;
        margin-bottom: 0;
    }

    @media (min-width: 1280px) {
        min-width: 510px;
    }
`

export const HighlightImg = styled.div`
    background: url(${p => p.url}), ${p => p.theme.colors.main};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 215px;

    @media (min-width: 768px) {
        width: 330px;
        height: 220px;
    }

    @media (min-width: 1280px) {
        width: 510px;
        height: 400px;
    }
`

export const HighlightInfoContainer = styled.div`
    padding: 22px 20px;
    background-color: ${p => p.theme.colors.secondary};
`

export const HighlightTitle = styled.p`
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
    margin-bottom: 10px;
`

export const HighlightAuthor = styled.div`
    display: flex;
    gap: 12px;
`

export const HighlightAuthotAvatar = styled.img`
    width: 20px;
    height: 20px;
    border-radius: ${p => p.theme.radii.round};
`

export const HighlightAuthorName = styled.p`
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
`