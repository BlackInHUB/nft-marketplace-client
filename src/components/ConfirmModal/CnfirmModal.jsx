import { IconButton } from "../BaseComponents/Buttons/IconButton";
import { Backdrop, BtnsWrapper, Modal, ModalText } from "./CnfirmModal.styled";
import { useEscapeKey } from "../../hooks";
import { useRef, useEffect } from "react";

export const ConfirmModal = ({text, confirm, cancel, show}) => {
    const ref = useRef();

    useEscapeKey(() => cancel(null));

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        };
        
        const handleClick = (e) => {
            if (show && ref.current && !ref.current.contains(e.target)) {
                cancel(null);
            };
        };

        document.addEventListener('mousedown', handleClick);

        return () => {document.removeEventListener('mousedown', handleClick); document.body.style.overflow = 'unset'};
    }, [cancel, show])

    return (
        <Backdrop>
            <Modal ref={ref} show={show}>
                <ModalText>{text}</ModalText>
                <BtnsWrapper>
                    <IconButton iconType='done' w='30px' h='30px' position='static' onClick={confirm} />
                    <IconButton iconType='close' w='30px' h='30px' position='static' onClick={() => cancel(null)} />
                </BtnsWrapper>
            </Modal>
        </Backdrop>
    )
}