import { Btn, BtnText, IconContainer, StyledIcon } from "./EditorBtn.styled";
import {AiOutlineEdit} from 'react-icons/ai';
import {VscChromeClose} from 'react-icons/vsc';

export const EditorBtn = ({iconType, onClick, top, left, right, bottom, text}) => {
    return (
        <Btn type='button' onClick={onClick} top={top} left={left} right={right} bottom={bottom} >
            <BtnText>{text}</BtnText>
            <IconContainer>
                <StyledIcon
                    as={
                        iconType === 'edit' ? AiOutlineEdit :
                        iconType === 'close' ? VscChromeClose :
                        null 
                    }
                />
            </IconContainer>
        </Btn>
    )
}