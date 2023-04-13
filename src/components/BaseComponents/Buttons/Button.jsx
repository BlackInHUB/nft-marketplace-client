import { Btn, StyledIcon } from "./Button.styled"
import {ReactComponent as Rocket} from '../../../images/icons/Rocket.svg';
import {ReactComponent as RocketLaunch} from '../../../images/icons/RocketLaunch.svg';
import {ReactComponent as User} from '../../../images/icons/User.svg';
import {ReactComponent as Mail} from '../../../images/icons/EyeSlash.svg';
import {ReactComponent as Eye} from '../../../images/icons/Eye.svg';
import {ReactComponent as Plus} from '../../../images/icons/Plus.svg';
import {ReactComponent as Wallet} from '../../../images/icons/Wallet.svg';
import {AiOutlineEdit} from 'react-icons/ai';
import {VscChromeClose} from 'react-icons/vsc';
import {MdLogout} from 'react-icons/md';

export const Button = ({content, fill, iconType, onClick, width, borderColor, pr, pl, pb, pt, bold, w, h}) => {

    return (
        <Btn onClick={onClick} width={width} borderColor={borderColor} pr={pr} pl={pl} pt={pt} pb={pb} bold={bold}>
            {iconType === 'user' ?
            <StyledIcon as={User} fill={fill} w={w} h={h} /> :
            iconType === 'rocket' ?
            <StyledIcon as={Rocket} fill={fill} w={w} h={h} /> :
            iconType === 'mail' ? 
            <StyledIcon as={Mail} fill={fill} w={w} h={h} /> :
            iconType === 'eye' ?
            <StyledIcon as={Eye} fill={fill} w={w} h={h} /> :
            iconType === 'rocketlaunch' ?
            <StyledIcon as={RocketLaunch} fill={fill} w={w} h={h} /> :
            iconType === 'plus' ?
            <StyledIcon as={Plus} fill={fill} w={w} h={h} /> :
            iconType === 'edit' ?
            <StyledIcon as={AiOutlineEdit} fill={fill} w={w} h={h} /> :
            iconType === 'close' ?
            <StyledIcon as={VscChromeClose} fill={fill} w={w} h={h} /> :
            iconType === 'logout' ?
            <StyledIcon as={MdLogout} fill={fill} w={w} h={h} /> :
            iconType === 'wallet' ?
            <StyledIcon as={Wallet} fill={fill} w={w} h={h} /> :
            null
            }
            {content}
        </Btn>
    )
};