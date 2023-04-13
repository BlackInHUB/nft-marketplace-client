import {IconBtn, Avatar, StyledIcon} from './IconButton.styled';
import {ReactComponent as Menu} from '../../../images/icons/List.svg';
import {ReactComponent as Plus} from '../../../images/icons/Plus.svg';
import {AiOutlineEdit} from 'react-icons/ai';
import {VscChromeClose} from 'react-icons/vsc';
import {MdDone} from 'react-icons/md';
import {AiOutlineDelete} from 'react-icons/ai';

export const IconButton = ({iconType, fill, onClick, w, h, top, right, position, ml, mr, avatarUrl}) => {
    return (
        <IconBtn onClick={onClick} type='button' top={top} right={right} position={position} ml={ml} mr={mr}>
            {iconType === 'menu' ?
            <StyledIcon as={Menu} w={w} h={h} fill={fill} /> :
            iconType === 'close' ?
            <StyledIcon as={VscChromeClose} w={w} h={h} fill={fill} /> :
            iconType === 'edit' ?
            <StyledIcon as={AiOutlineEdit} w={w} h={h} fill={fill} /> :
            iconType === 'done' ?
            <StyledIcon as={MdDone} w={w} h={h} fill={fill} /> :
            iconType === 'plus' ?
            <StyledIcon as={Plus} w={w} h={h} fill={fill} /> :
            iconType === 'avatar' ?
            <Avatar src={avatarUrl}/> :
            iconType === 'delete' ? 
            <StyledIcon as={AiOutlineDelete} w={w} h={h} fill={fill} /> :
            null
            }
        </IconBtn>
    )
};