import styled from "styled-components";

export const SearhcContainer = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;

    /* @media (min-width: 768px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    @media (min-width: 1280px) {
        padding-top: 80px;
        padding-bottom: 80px;
    } */
`

export const SearchTitle = styled.h2`
    font-size: ${p => p.theme.fontSizes.h4};
    line-height: ${p => p.theme.lineHeights.h4};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: 10px;

    @media (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.h3};
        line-height: ${p => p.theme.lineHeights.h3};
    }

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h2};
        line-height: ${p => p.theme.lineHeights.h2};
    }
`

export const SearchText = styled.p`
    margin-bottom: 30px;

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.lineHeights.h5};
    }
`

export const SearchForm = styled.form`
    position: relative;
`

export const SerachFormInput = styled.input`
    width: 100%;
    outline: none;
    background-color: transparent;
    padding: 20px 70px 20px 20px;
    border: ${p => p.theme.borders.thin} ${p => p.theme.colors.secondary};
    border-radius: ${p => p.theme.radii.normal};
    color: ${p => p.theme.colors.text};

    ::placeholder {
        font-family: ${p => p.theme.fontFamily.main};
        font-size: ${p => p.theme.fontSizes.body};
        line-height: ${p => p.theme.lineHeights.body};
        color: ${p => p.theme.colors.caption};
    }
`