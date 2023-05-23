import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TabContainer = styled.div`
    width: 100%;
`

export const TabList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`

export const TabListItem = styled.li`
    
`

export const TabListItemLink = styled(NavLink)`
    display: block;
    position: relative;
    text-align: center;
    background-color: transparent;
    padding: 20px 0;
    transition: all 250ms ease;
    cursor: pointer;

    @media (min-width: 768px) {
        padding: 20px 30px;
    }

    ::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: ${p => p.theme.colors.caption};
        transition: all 500ms ease;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        ::after{
            width: 100%;
        }
    }

    &.active {
        ::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: ${p => p.theme.colors.caption};
        }
    }
`

export const TabListItemName = styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.caption};
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.fontSizes.h5};
    }

    ${TabListItemLink}.active & {
        color: ${p => p.theme.colors.text};
    }
`