import { ModalContainer, Modal } from "./MenuModal.styled";
import { IconButton } from "../BaseComponents/Buttons/Buttons";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const MenuModal = ({children, menuToggle, isOpen}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(isOpen)
    }, [isOpen])

    const handleClose = () => {
        setShow(!show)
        setTimeout(() => {
            menuToggle();
        }, 500);
    };

    useEscapeKey(handleClose);

    return (
        createPortal(
            <ModalContainer show={show}>
                <Modal>
                    <IconButton iconType='close' onClick={handleClose} />
                    {children}
                </Modal>
            </ModalContainer>,
            document.querySelector('#modal-root')
        )
    )
}