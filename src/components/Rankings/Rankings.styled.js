import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
`

export const TopContainer = styled.div`
    padding: 40px 0;

    @media (min-width: 768px) {
        /* padding: 80px 0; */
    }
`

export const TopTitle = styled.h2`
    font-size: ${p => p.theme.fontSizes.h4};
    line-height: ${p => p.theme.lineHeights.h4};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: 10px;

    @media (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.h3};
        line-height: ${p => p.theme.lineHeights.h3};
        margin-bottom: 20px;
    }

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h2};
        line-height: ${p => p.theme.lineHeights.h2};
    }
`

export const TopDescription = styled.p`

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.lineHeights.h5};
    }
`