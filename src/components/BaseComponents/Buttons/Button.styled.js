import styled from "styled-components";

export const Btn = styled.button`
    position: relative;
    overflow: hidden;
    background-color: transparent;
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.fz ? p.fz : p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.bold === 'false' ? 'normal' : p.theme.fontWeights.bold};
    gap: 12px;
    font-family: inherit;
    padding-left: ${p => p.pl ? p.pl + 'px' : '50px'};
    padding-right: ${p => p.pr ? p.pr + 'px' : '50px'};
    padding-top: ${p => p.pt ? p.pt : '19px'};
    padding-bottom: ${p => p.pb ? p.pb : '19px'};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    border: ${p => p.theme.borders.main} ${p => p.borderColor ? p.borderColor : p.theme.colors.purple};
    border-radius: ${p => p.theme.radii.normal};
    transition: all 250ms ease;

    @media (min-width: 480px) {
        width: ${p => p.width ? p.width : 'fit-content'}
    }

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        width: 0;
        height: 100%;
        background-color: ${p => p.theme.colors.purple};
        transition: inherit;
    }

    &:hover,
    &:focus-visible {
        ${p => p.borderColor === 'transparent' ? 
            `color: ${p.theme.colors.purple};` :
            `::before {width: 100%;}`
        }
    }
`

export const StyledIcon = styled.svg`
    width: ${p => p.w ? p.w : '20px'};
    height: ${p => p.h ? p.h : '20px'};
    fill: ${p => p.fill ? p.theme.colors[p.fill] : p.theme.colors.purple};
    transition: inherit;

    ${Btn}:hover & {
        fill: ${p => p.fill ? p.theme.colors.purple : p.theme.colors.white};
    }
    ${Btn}:focus-visible & {
        fill: ${p => p.fill ? p.theme.colors.purple : p.theme.colors.white};
    }
`