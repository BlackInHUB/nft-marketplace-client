import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};

    @media (min-width: 768px) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

export const Nav = styled.nav`
    padding: 0 30px;
    
    @media (min-width: 1280px) {
        padding: 0;
        display: flex;
        align-items: center;
    }
`

export const NavList = styled.ul`
    text-align: center;
    margin-bottom: 10px;
    
    @media (min-width: 1280px) {
        display: flex;
        margin-bottom: 0;
        margin-right: 10px;
    }
`

export const NavListItem = styled.li`

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    @media (min-width: 1280px) {
            &:not(:last-child) {
            margin-bottom: 0;
            margin-right: 10px;
        }
    }
`

export const NavListItemLink = styled(NavLink)`
    display: block;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    padding: 12px 20px;
    transition: all 150ms linear;

    :hover,
    :focus-visible {
        color: ${p => p.theme.colors.accent};
    }

    &.active {
        color: ${p => p.theme.colors.accent};
    }
`

export const BtnsList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1280px) {
        flex-direction: row;
        
    }
`

export const BtnsListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 10px;
    }

    @media (min-width: 1280px) {
        &:not(:last-child) {
            margin-bottom: 0px;
            margin-right: 10px;
        }
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const NavLstBtnLink = styled(NavLink)`
    
`