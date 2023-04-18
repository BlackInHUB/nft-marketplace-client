import styled from "styled-components";

export const ModalContainer = styled.div`
    transform: ${p => p.type === 'userMenu' & p.show ? 'translate(0, 0) scale(1)' : 
                p.type === 'userMenu' & !p.show ? 'translate(50%, -50%) scale(0)' : 
                !p.type & p.show ? 'translate(0, 0)' : 'translate(0, -100%)'
                };
    opacity: ${p => p.show ? '1' : '0'};
    position: ${p => p.position ? p.position : 'fixed'};
    top: ${p => p.type === 'userMenu' ? '100%;' : 0};
    right: ${p => p.type === 'userMenu' ? '30px' : 0};
    height: ${p => p.type === 'userMenu' ? 'auto' : '100vh'};
    width: ${p => p.type === 'userMenu' ? 'auto' : '100vw'};
    padding: ${p => p.type ? '25px' : 0};
    background-color: ${p => p.type === 'userMenu' ? p.theme.colors.darkGrey : p.theme.colors.mainBlack};
    transition: all 500ms ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border-bottom-left-radius: ${p => p.type === 'userMenu' ? p.theme.radii.normal : 0};
    border-bottom-right-radius: ${p => p.type === 'userMenu' ? p.theme.radii.normal : 0};
    border-top-left-radius: ${p => p.type === 'userMenu' ? p.theme.radii.normal : 0};
`

export const ModalContent = styled.div`
    
`