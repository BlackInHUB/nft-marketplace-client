import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {ReactComponent as Marketplace} from '../../images/icons/NFTmarketplace.svg'
import {ReactComponent as Logo} from '../../images/icons/Storefront.svg'

export const Header = styled.header`
    position: relative;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
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
        color: ${p => p.theme.colors.purple};
    }

    &.active {
        color: ${p => p.theme.colors.purple};
    }
`

export const LogoLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const LogoText = styled(Marketplace)`
    width: 150px;
    height: auto;
    fill: ${p => p.theme.colors.white};
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        width: 200px;
    }

    ${LogoLink}:hover & {
        fill: ${p => p.theme.colors.purple};
    };
    ${LogoLink}:focus-visible & {
        fill: ${p => p.theme.colors.purple};
    };
`

export const LogoIcon = styled(Logo)`
    width: 24px;
    height: auto;
    fill: ${p => p.theme.colors.purple};
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        width: 32px;
    }

    ${LogoLink}:hover & {
        fill: ${p => p.theme.colors.white};
    };
    ${LogoLink}:focus-visible & {
        fill: ${p => p.theme.colors.white};
    };
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
    /* overflow: hidden; */
`