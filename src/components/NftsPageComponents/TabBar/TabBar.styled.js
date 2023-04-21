import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

    @media (min-width: 1280px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const TabList = styled.ul`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    @media (min-width: 1280px) {
        margin-bottom: 0px;
    }
`

export const TabListItem = styled.li`
    
`

export const TabListItemLink = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px 22px;
    transition: all 250ms ease;

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

export const TabListItemCounter = styled.p`
    padding: 5px 10px;
    background-color: ${p => p.theme.colors.secondary};
    border-radius: ${p => p.theme.radii.normal};
    transition: all 250ms ease;

    ${TabListItemLink}.active & {
        background-color: ${p => p.theme.colors.caption};
    }
`