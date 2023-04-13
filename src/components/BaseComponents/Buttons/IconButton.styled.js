import styled from "styled-components";

export const IconBtn = styled.button`
position: ${p => p.position ? p.position : 'absolute'};
top: ${p => p.top ? p.top + 'px' : '15px'};
right: ${p => p.right ? p.right + 'px' : '30px'};
outline: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
border: none;
transition: all 250ms ease;
margin-left: ${p => p.ml ? p.ml : '0'};
margin-right: ${p => p.mr ? p.mr : '0'}
`

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.round};
    transition: inherit;

    ${IconBtn}:hover & {
        border-color: ${p => p.theme.colors.purple};
    }
`

export const StyledIcon = styled.svg`
    width: ${p => p.w ? p.w : '20px'};
    height: ${p => p.h ? p.h : '20px'};
    fill: ${p => p.fill ? p.theme.colors[p.fill] : p.theme.colors.purple};
    transition: inherit;

    ${IconBtn}:hover & {
        fill: ${p => p.fill === 'white' ? p.theme.colors.purple : p.theme.colors.white};
    }
    ${IconBtn}:focus-visible & {
        fill: ${p => p.fill === 'white' ? p.theme.colors.purple : p.theme.colors.white};
    }
`