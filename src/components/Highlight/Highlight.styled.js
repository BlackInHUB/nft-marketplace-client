import styled from "styled-components";

export const HeroHighlightContainer = styled.div`
    min-width: 315px;
    max-width: 500px;
    background-color: ${p => p.theme.colors.darkGrey};
    border-radius: ${p => p.theme.radii.normal};
    overflow: hidden;
    margin-bottom: 40px;
    opacity: ${p => p.show ? '1' : '0'};
    transform: ${p => p.show ? 'translate(0, 0)' : 'translate(100%, 0)'};
    transition: all 500ms ease;

    @media (min-width: 768px) {
        min-width: 330px;
        margin-bottom: 0;
    }

    @media (min-width: 1280px) {
        min-width: 510px;
    }
`

export const HighlightImg = styled.img`
    background-color: ${p => p.theme.colors.mainBlack};
    width: 100%;
`

export const HighlightInfoContainer = styled.div`
    padding: 22px 20px;

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