import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;
    }
`

export const ListItem = styled.li`
    min-width: 240px;
    position: relative;
    background-color: ${p => p.theme.colors.secondary};
    padding: 20px;
    border-radius: ${p => p.theme.radii.normal};
    transition: all 250ms ease;

    :hover,
    :focus-visible {
        transform: scale(1.01);
    }
`

export const AuthorLink = styled(NavLink)`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;

    @media (min-width: 1280px) {
        flex-direction: column;
    }
`

export const AuthorRank = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
    width: 30px;
    height: 30px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.main};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1280px) {
        top: 20px;
        left: 20px;
    }
`

export const AuthorRankNumber = styled.span`
    font-family: ${p => p.theme.fontFamily.secondary};
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.caption};
`

export const AuthorAvatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: ${p => p.theme.radii.round};

    @media (min-width: 1280px) {
        width: 120px;
        height: 120px;
    }
`

export const Wrapper = styled.div`
    
    @media (min-width: 1280px) {
        text-align: center;
    }
`

export const AuthorName = styled.p`
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: 5px;
`

export const AuthorValue = styled.p`
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.caption};
`

export const AuthorValueNumber = styled.span`
    font-family: ${p => p.theme.fontFamily.secondary};
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.text};
`