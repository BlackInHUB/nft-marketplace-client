import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: 10;
`

export const ModalContainer = styled.div`
    transform: ${p => p.type === 'userMenu' & p.show ? 'translate(0, 0) scale(1)' : 
                p.type === 'userMenu' & !p.show ? 'translate(50%, -50%) scale(0)' : 
                p.type === 'mainMenu' & p.show ? 'translate(0, 0)' : 'translate(0, -100%)'
                };
    opacity: ${p => p.show ? '1' : '0'};
    position: ${p => p.position ? p.position : 'fixed'};
    top: ${p => p.type === 'userMenu' ? '57px' : 0};
    right: ${p => p.type === 'userMenu' ? '30px' : ''};
    height: ${p => p.type === 'userMenu' ? 'auto' : '100vh'};
    width: ${p => p.type === 'userMenu' ? 'auto' : '100vw'};
    padding: ${p => p.type ? '25px' : 0};
    background-color: ${p => p.type === 'userMenu' ? p.theme.colors.secondary : p.theme.colors.main};
    transition: all 500ms ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.main};
    border-bottom-left-radius: ${p => p.type === 'userMenu' ? p.theme.radii.normal : 0};
    border-bottom-right-radius: ${p => p.type === 'userMenu' ? p.theme.radii.normal : 0};
    border-top-left-radius: ${p => p.type === 'userMenu' ? p.theme.radii.normal : 0};

    @media (min-width: 768px) {
        right: ${p => p.type === 'userMenu' ? '72px' : 0};
    }

    @media (min-width: 1280px) {
        right: ${p => p.type === 'userMenu' ? '115px' : 0};
        top: ${p => p.type === 'userMenu' ? '70px' : 0};
    }
`

export const ModalContent = styled.div`
    
`