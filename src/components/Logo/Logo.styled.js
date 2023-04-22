import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {ReactComponent as Marketplace} from '../../images/icons/NFTmarketplace.svg';
import {ReactComponent as Logo} from '../../images/icons/Storefront.svg';

export const LogoLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const LogoText = styled(Marketplace)`
    width: ${p => p.footer ? '200px' : '150px'};
    height: auto;
    fill: ${p => p.theme.colors.text};
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        width: 200px;
    }

    ${LogoLink}:hover & {
        fill: ${p => p.theme.colors.accent};
    };
    ${LogoLink}:focus-visible & {
        fill: ${p => p.theme.colors.accent};
    };
`

export const LogoIcon = styled(Logo)`
    width: ${p => p.footer ? '32px' : '24px'};
    height: auto;
    fill: ${p => p.theme.colors.accent};
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        width: 32px;
    }

    ${LogoLink}:hover & {
        fill: ${p => p.theme.colors.text};
    };
    ${LogoLink}:focus-visible & {
        fill: ${p => p.theme.colors.text};
    };
`