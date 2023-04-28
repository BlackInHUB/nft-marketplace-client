import styled from "styled-components";

export const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const TabList = styled.ul`
    display: flex;
    gap: 10px;
    margin-bottom: 30px;

    @media (min-width: 1280px) {
        margin-bottom: 0px;
    }
`

export const TabListItem = styled.li`
    
`

export const TabListItemBtn = styled.button`
    background-color: transparent;
    position: relative;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px 22px;
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

    ${p => !p.active} {
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
    font-family: ${p => p.theme.fontFamily.main};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.caption};
    font-size: ${p => p.theme.fontSizes.body};
        line-height: ${p => p.theme.fontSizes.body};
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.fontSizes.h5};
    }

    ${p => !p.active} {
        color: ${p => p.theme.colors.text};
    }
`

export const TabListItemCounter = styled.p`
    font-family: ${p => p.theme.fontFamily.secondary};
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.fontSizes.body};
    color: ${p => p.theme.colors.text};
    padding: 5px 10px;
    background-color: ${p => p.theme.colors.secondary};
    border-radius: ${p => p.theme.radii.normal};
    transition: all 250ms ease;

    ${p => !p.active} {
        background-color: ${p => p.theme.colors.caption};
    }
`