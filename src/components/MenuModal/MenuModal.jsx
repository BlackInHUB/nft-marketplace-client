import { ModalContainer, Modal  } from "./MenuModal.styled";
import { IconButton } from "../BaseComponents/Buttons/IconButton";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useEffect } from "react";
import { useRef } from "react";

export const MenuModal = ({children, menuToggle, position, type, menuShow}) => {

    const ref = useRef();

    useEscapeKey(menuToggle);

    useEffect(() => {
        const handleClick = (e) => {
            if (menuShow && ref.current && !ref.current.contains(e.target)) {
                menuToggle();
            };
        };

        document.addEventListener('mousedown', handleClick);

        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuShow, menuToggle])
    
    return (
        <ModalContainer ref={ref} name='modal' show={menuShow} position={position} type={type}>
            <Modal>
                {!type && <IconButton iconType='close' fill='white' onClick={menuToggle} />}
                {children}
            </Modal>
        </ModalContainer>
    )
}