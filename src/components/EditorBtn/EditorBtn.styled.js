import styled from "styled-components";

export const Btn = styled.button`
    position: absolute;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    top: ${p => p.top};
    right: ${p => p.right};
    bottom: ${p => p.bottom};
    left: ${p => p.left};
`

export const BtnText = styled.p`
    font-size: ${p => p.theme.fontSizes.caption};
    color: ${p => p.theme.colors.text};
    margin-right: 5px;
    opacity: 0;
    transform: translate(100%, 0);
    transition: all 250ms ease;

    @media (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.body};
    }

    ${Btn}:hover & {
        opacity: 1;
        transform: translate(0, 0);
        /* color: ${p => p.theme.colors.accent}; */
    }
    ${Btn}:focus-visible & {
        opacity: 1;
        transform: translate(0, 0);
        /* color: ${p => p.theme.colors.accent}; */
    }
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: ${p => p.theme.colors.main};
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.caption};
    border-radius: ${p => p.theme.radii.round};
    transition: all 250ms ease;

    ${Btn}:hover & {
        border-color: ${p => p.theme.colors.text};
    }
    ${Btn}:focus-visible & {
        border-color: ${p => p.theme.colors.text};
    }
`

export const StyledIcon = styled.svg`
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.colors.caption};
    transition: all 250ms ease;
/* 
    @media (min-width: 768px) {
        width: 25px;
        height: 25px;
    } */

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.text};
    }
    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.text};
    }
`