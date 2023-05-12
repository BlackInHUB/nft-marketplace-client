import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
`

export const ListItem = styled.li`

`

export const ListItemLink = styled(NavLink)`
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 250ms ease;

    :hover,
    :focus-visible {
        color: ${p => p.theme.colors.accent};
    }
`

export const StyledIcon = styled.svg`
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.colors.text};
    transition: all 250ms ease;

    ${ListItemLink}:hover & {
        fill: ${p => p.theme.colors.accent};
    }
    ${ListItemLink}:focus-visible & {
        fill: ${p => p.theme.colors.accent};
    }
`