import styled from "styled-components";

export const ModalContainer = styled.div`
    transform: ${p => p.show ? 'translate(0, 0)' : 'translate(0, -100%)'};
    opacity: ${p => p.show ? '1' : '0'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2B2B2B;
    transition: all 500ms ease;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.div`
    
`