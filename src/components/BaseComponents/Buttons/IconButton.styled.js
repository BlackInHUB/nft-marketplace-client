import styled from "styled-components";

export const IconBtn = styled.button`
position: ${p => p.position ? p.position : 'absolute'};
top: ${p => p.top ? p.top : '15px'};
right: ${p => p.right ? p.right : '30px'};
outline: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
border: none;
transition: all 250ms ease;
margin-left: ${p => p.ml ? p.ml : '0'};
margin-right: ${p => p.mr ? p.mr : '0'};
margin-bottom: ${p => p.mb ? p.mb : '0'};
margin-top: ${p => p.mt ? p.mt : '0'};
`

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.text};
    border-radius: ${p => p.theme.radii.round};
    transition: all 250ms ease;

    ${IconBtn}:hover & {
        border-color: ${p => p.theme.colors.accent};
    }
    ${IconBtn}:focus-visible & {
        border-color: ${p => p.theme.colors.accent};
    }
`

export const StyledIcon = styled.svg`
    width: ${p => p.w ? p.w : '20px'};
    height: ${p => p.h ? p.h : '20px'};
    fill: ${p => p.theme.colors.text};
    transition: all 250ms ease;

    ${IconBtn}:hover & {
        fill: ${p => p.theme.colors.accent};
    }
    ${IconBtn}:focus-visible & {
        fill: ${p => p.theme.colors.accent};
    }
`