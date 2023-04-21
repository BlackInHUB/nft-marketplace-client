import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: ${p => p.editing ? 'column' : 'row'};
    gap: 10px;
    margin-bottom: ${p => p.addLink ? '10px' : 0};
`

export const ListItem = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const ListItemLink = styled.a`
    display: flex;
    align-items: center;
`

export const StyledIcon = styled.svg`
    width: 24px;
    height: 24px;
    fill: ${p => p.theme.colors.caption};
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        width: 32px;
        height: 32px;
    }

    ${ListItemLink}:hover & {
        fill: ${p => p.theme.colors.accent};
    }
    ${ListItemLink}:focus-visible & {
        fill: ${p => p.theme.colors.accent};
    }
`

export const AddLinkWrapper = styled.div`

`

export const EditBtnsWrapper = styled.div`
    display: flex;
    gap: 10px;
`