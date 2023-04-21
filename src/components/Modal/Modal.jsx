import { ModalBackdrop, ModalContainer, ModalContent  } from "./Modal.styled";
import { IconButton } from "../BaseComponents/Buttons/IconButton";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useEffect } from "react";
import { useRef } from "react";

export const Modal = ({children, menuToggle, position, type, menuShow}) => {

    const ref = useRef();

    useEscapeKey(() => menuToggle(type));

    useEffect(() => {
        if (menuShow) {
            document.body.style.overflow = 'hidden';
        };
        
        const handleClick = (e) => {
            if (menuShow && ref.current && !ref.current.contains(e.target)) {
                menuToggle(type);
            };
        };

        document.addEventListener('mousedown', handleClick);

        return () => {document.removeEventListener('mousedown', handleClick); document.body.style.overflow = 'unset'};
    }, [menuShow, menuToggle, type])
    
    return (
        <ModalBackdrop>
            <ModalContainer ref={ref} name='modal' show={menuShow} position={position} type={type}>
                <ModalContent>
                    {type !== 'userMenu' && <IconButton iconType='close' type='button' onClick={() => menuToggle(type)} />}
                    {children}
                </ModalContent>
            </ModalContainer>
        </ModalBackdrop>
    )
}