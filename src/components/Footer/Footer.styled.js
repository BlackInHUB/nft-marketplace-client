import { NavLink } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import {ReactComponent as Mail} from '../../images/icons/EnvelopeSimple.svg';

const btnAnim = keyframes`
    0% {right: 0;}
    100% {right: 248px;}
`

const inputAnim = keyframes`
    0% {width: 420px;}
    100% {width: 200px;}
`

export const FooterSctn = styled.div`
    background-color: ${p => p.theme.colors.secondary};
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.light};
`

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-bottom: ${({theme}) => theme.borders.main} ${({theme}) => theme.colors.caption};

    @media (min-width: 1280px) {
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 50px;
    }
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 30px;

    @media (min-width: 768px) {
        width: 330px;
        margin-bottom: 0px;
    }
`

export const Info = styled.p`
    margin-top: 20px;
    margin-bottom: ${p => p.mb ? p.mb : 0};
`

export const GHlink = styled.a`
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.main};
`

export const Titles = styled.p`
    font-family: ${p => p.theme.fontFamily.secondary};
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
    color: ${p => p.theme.colors.text};
`

export const NavContainer = styled.div`
    margin-bottom: 30px;

    @media (min-width: 1280px) {
        margin-bottom: 0;
    }
`

export const NavList = styled.ul`
    margin-top: 20px;
`

export const NavListItem = styled.li`

    :not(:last-child) {
        margin-bottom: 20px;
    }
`

export const NavListItemLink = styled(NavLink)`
    transition: all 250ms ease;

    :hover,
    :focus-visible {
        color: ${p => p.theme.colors.accent};
    }
`

export const DigestContainer = styled.div`
    padding-bottom: 30px;

    @media (min-width: 1280px) {
        padding-bottom: 0;
    }
`

export const DigestForm = styled.form`

    @media (min-width: 768px) {
        display: flex;
        position: relative;
        align-items: center;
        /* width: 420px; */
    }
`

export const DigestFormInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    border: ${({theme}) => theme.borders.main} ${({theme}) => theme.colors.caption};
    border-radius: ${({theme}) => theme.radii.normal};
    outline: none;
    margin-bottom: 16px;
    transition: all 250ms ease;
    animation: ${p => p.submit ? inputAnim : ''};
    animation-duration: 500ms;
    animation-fill-mode: forwards;

    @media (min-width: 768px) {
        margin-bottom: 0;
        width: 100%;
        border: none;
    }

    ::placeholder {
        font-family: ${({theme}) => theme.fontFamily.main};
        color: ${({theme}) => theme.colors.main};
        font-size: ${p => p.theme.fontSizes.body};
        line-height: ${p => p.theme.lineHeights.body};
    }

    :hover,
    :focus-visible {
        border-color: ${({theme}) => theme.colors.accent};
    }
`

export const DigestFormBtn = styled.button`
    font-family: inherit;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({theme}) => theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.accent};
    width: 100%;
    padding: 10px 0;
    border: ${({theme}) => theme.borders.main} ${({theme}) => theme.colors.accent};
    border-radius: ${({theme}) => theme.radii.normal};
    cursor: pointer;
    animation: ${p => p.submit ? btnAnim : ''};
    animation-duration: 500ms;
    animation-fill-mode: forwards;

    @media (min-width: 768px) {
        width: fit-content;
        padding: 8px 50px;
        position: absolute;
        right: 0;
    }
`

export const DigestFormBtnIcon = styled(Mail)`
    width: 20px;
    height: 20px;
    fill: ${({theme}) => theme.colors.text};
    margin-right: 12px;
    transition: all 250ms ease;
`

export const AllRights = styled.p`
    margin-top: 20px;
    font-size: ${p => p.theme.fontSizes.caption};
    line-height: ${p => p.theme.lineHeights.caption};
`