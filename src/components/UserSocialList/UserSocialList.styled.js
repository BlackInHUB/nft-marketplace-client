import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    gap: 10px;
`

export const ListItem = styled.li`

`

export const ListItemLink = styled.a`

`

export const StyledIcon = styled.svg`
    width: 24px;
    height: 24px;
    fill: ${p => p.theme.colors.grey};
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        width: 32px;
        height: 32px;
    }

    ${ListItemLink}:hover & {
        fill: ${p => p.theme.colors.purple};
    }
    ${ListItemLink}:focus-visible & {
        fill: ${p => p.theme.colors.purple};
    }
`

export const AddLinkWrapper = styled.div`

`