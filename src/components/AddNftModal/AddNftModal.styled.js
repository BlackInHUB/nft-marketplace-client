import styled from "styled-components";
import {ReactComponent as Plus} from '../../images/icons/Plus.svg';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    width: calc(100vw - 60px);
    height: 70%;
    overflow: hidden;
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.secondary};
    padding: 40px;
    opacity: ${p => p.show ? '1' : 0};
    transform: ${p => p.show ? 'translate(50%, -50%) scale(1)' : 'translate(50%, -50%) scale(0)'};
    transition: all 500ms ease;

    @media (min-width: 768px) {
        width: calc(100vw - 144px);
        height: calc(841px * 0.66);
    }

    @media (min-width: 1280px) {
        width: 60%;
        height: calc(841px * 0.8);
    }
`

export const NftForm = styled.form`
    display: flex;
    width: 100%;
    height: 100%;
    font-family: ${p => p.theme.fontFamily.main};
    overflow: hidden;
`

export const NftFormFirst = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: ${p => p.show === 1 ? 'translate(0, 0)' : 'translate(-100%, 0)'};
    transition: all 250ms ease;
`

export const NftFormSecond = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: ${p => p.show === 2 ? 'translate(0, 0)' : 'translate(100%, 0)'};
    transition: all 250ms ease;
`

export const NftFormLabel = styled.label`
    display: block;
    font-family: ${p => p.theme.fontFamily.secondary};
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.caption};
    font-weight: ${p => p.theme.fontWeights.boldest};
    margin-bottom: 5px;

    @media (min-width: 1280px) {
        font-size: ${p => p.theme.fontSizes.h5};
        line-height: ${p => p.theme.lineHeights.h5};
    }

    :not(:first-of-type) {
        margin-top: 5px;
    }
`


export const NftFormInput = styled.input`
    display: block;
    width: 100%;
    outline: none;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    padding: 6px 12px;
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.caption};
    border-radius: ${p => p.theme.radii.normal};
    margin-bottom: ${p => p.mb ? p.mb : 0};
    transition: all 150ms ease;

    @media (min-width: 768px) {
        width: 300px;
    }

    &::placeholder {
        font-family: ${p => p.theme.fontFamily.main};
        color: ${p => p.theme.colors.caption};
    };

    :hover,
    :focus-visible {
        border-color: ${p => p.theme.colors.accent};
    }
`

export const NftFormTextarea = styled.textarea`
    width: 100%;
    height: 100px;
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.caption};
    resize: none;
    padding: 10px;
    font-family: inherit;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    outline: none;
    transition: all 250ms ease;

    &::placeholder {
        font-family: ${p => p.theme.fontFamily.main};
        color: ${p => p.theme.colors.caption};
    };

    :hover,
    :focus-visible {
        border-color: ${p => p.theme.colors.accent};
    }
`

export const NftFileContainer = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border-radius: ${p => p.theme.radii.normal};
    background: ${p => p.preview ? `url(${p.preview})` : 'transparent'};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media (min-width: 768px) {
        height: 300px;
    }

    @media (min-width: 1280px) {
        height: 400px;
    }
`

export const NftFormFileLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.caption};
    border-radius: ${p => p.theme.radii.normal};
    transition: all 250ms ease;

    :hover,
    :focus-visible {
        color: ${p => p.theme.colors.accent};
        border-color: ${p => p.theme.colors.accent};
    }
`

export const NftFormFileInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`

export const PlusIcon = styled(Plus)`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 50px;
    height: 50px;
    fill: ${p => p.theme.colors.text};
    transition: all 250ms ease;

    @media (min-width: 1280px) {
        width: 70px;
        height: 70px;
    }

    ${NftFormFileLabel}:hover & {
        fill: ${p => p.theme.colors.accent};
    }
    ${NftFormFileLabel}:focus-visible & {
        fill: ${p => p.theme.colors.accent};
    }
`

export const InputWrapper = styled.div`

`

export const BtnWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`