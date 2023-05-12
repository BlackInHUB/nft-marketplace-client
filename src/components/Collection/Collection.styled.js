import styled from "styled-components";

export const Container = styled.section`
    background-color: ${p => p.theme.colors.secondary};
    padding: 40px 0;

    @media (min-width: 1280px) {
        padding: 60px 0;
    }
`

export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const BtnsWrapper = styled.div`
    display: flex;
    gap: 20px;
`

export const Title = styled.h2`
    font-size: ${p => p.theme.fontSizes.h4};
    line-height: ${p => p.theme.lineHeights.h4};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: 30px;

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h3};
        line-height: ${p => p.theme.lineHeights.h3};
    }
`

export const AuthorContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 30px;
`

export const AuthorAvatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: ${p => p.theme.radii.round};
`

export const AuthorName = styled.p`

`