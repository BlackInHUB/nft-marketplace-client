import {IconBtn, Avatar, StyledIcon} from './IconButton.styled';
import {ReactComponent as Menu} from '../../../images/icons/List.svg';
import {ReactComponent as Plus} from '../../../images/icons/Plus.svg';
import {AiOutlineEdit} from 'react-icons/ai';
import {VscChromeClose} from 'react-icons/vsc';
import {MdDone} from 'react-icons/md';
import {AiOutlineDelete} from 'react-icons/ai';

export const IconButton = ({type, iconType, onClick, w, h, top, right, position, ml, mr, mt, mb, avatarUrl}) => {
    return (
        <IconBtn onClick={onClick} type={type} top={top} right={right} position={position} ml={ml} mr={mr} mb={mb} mt={mt}>
            {iconType === 'avatar' ?
            <Avatar src={avatarUrl}/> :
            <StyledIcon w={w} h={h}
            as={iconType === 'menu' ? Menu :
            iconType === 'delete' ? AiOutlineDelete :
            iconType === 'plus' ? Plus :
            iconType === 'edit' ? AiOutlineEdit :
            iconType === 'close' ? VscChromeClose :
            iconType === 'done' ? MdDone :
            null} 
            />
            }
        </IconBtn>
    )
};