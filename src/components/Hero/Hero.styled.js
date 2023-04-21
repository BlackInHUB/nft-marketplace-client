import styled from "styled-components";

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${p => p.theme.colors.text};
    padding: 40px 30px;
    overflow: hidden;

    @media (min-width: 767px) {
        flex-direction: row;
        padding: 80px 0px;
        gap: 30px;
    }
`

export const HeroInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        align-items: start;
        max-width: 330px;
    }

    @media (min-width: 1280px) {
        max-width: 510px;
    }
`

export const HeroTitle = styled.h1`
    max-width: 503px;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.h4};
    line-height: ${p => p.theme.lineHeights.h4};
    margin-bottom: 10px;

    @media (min-width: 767px) {
        font-size: ${p => p.theme.fontSizes.h3};
        line-height: ${p => p.theme.lineHeights.h3};
        margin-bottom: 20px;
    }

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h1};
        line-height: ${p => p.theme.lineHeights.h1};
    }
`

export const HeroDescription = styled.p`
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    margin-bottom: 40px;

    @media (min-width: 767px) {
        margin-bottom: 20px;
    }

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.lineHeights.h5};
        margin-bottom: 40px;
    }
`

export const HeroInfoList = styled.ul`
    display: flex;
    gap: 30px;
    margin-top: 40px;

    @media (min-width: 767px) {
        margin-top: 20px;
    }

    @media (min-width: 1280px) {
        margin-top: 40px;
    }
`

export const HeroInfoListItem = styled.li`
    
`

export const HeroInfoListItemNumber = styled.p`
    font-family: ${p => p.theme.fontFamily.secondary};
    font-weight: ${p => p.theme.fontWeights.boldest};
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h4};
        line-height: ${p => p.theme.lineHeights.h4};
    }
`

export const HeroInfoListItemText = styled.p`
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.lineHeights.h5};
    }
`