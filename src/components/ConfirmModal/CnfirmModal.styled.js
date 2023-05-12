import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`

export const Modal = styled.div`
    position: absolute;
    padding: 30px;
    background-color: ${p => p.theme.colors.secondary};
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.main};
    border-radius: ${p => p.theme.radii.normal};
    top: 50%;
    left: 50%;
    transform: ${p => p.show ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'};
    transition: all 250ms ease;
`

export const ModalText = styled.p`
    text-align: center;
    font-size: ${p => p.theme.fontSizes.h5};
    line-height: ${p => p.theme.lineHeights.h5};
    margin-bottom: 30px;
`

export const BtnsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 0 auto;
`