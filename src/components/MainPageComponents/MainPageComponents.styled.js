import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
    background-color: ${p => p.theme.colors.secondary};
    padding-top: 40px;
    padding-bottom: 40px;

    @media (min-width: 1280px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`

export const BtnLink = styled(NavLink)`
    display: block;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 480px) {
        width: fit-content
    }

    @media (min-width: 768px) {
        margin: 0;
    }
`

export const TitleWrapper = styled.div`

`

export const TitleBtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (min-width: 1280px) {
        margin-bottom: 60px;
    }
`

export const Title = styled.h2`
    font-size: ${p => p.theme.fontSizes.h4};
    line-height: ${p => p.theme.lineHeights.h4};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: 10px;

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h3};
        line-height: ${p => p.theme.lineHeights.h3};
    }
`

export const Description = styled.p`

`