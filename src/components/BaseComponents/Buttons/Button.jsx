import { Btn, StyledIcon } from "./Button.styled"
import {ReactComponent as Rocket} from '../../../images/icons/Rocket.svg';
import {ReactComponent as RocketLaunch} from '../../../images/icons/RocketLaunch.svg';
import {ReactComponent as User} from '../../../images/icons/User.svg';
import {ReactComponent as Mail} from '../../../images/icons/EyeSlash.svg';
import {ReactComponent as Eye} from '../../../images/icons/Eye.svg';
import {ReactComponent as Plus} from '../../../images/icons/Plus.svg';
import {ReactComponent as Wallet} from '../../../images/icons/Wallet.svg';
import {ReactComponent as ArrowR} from '../../../images/icons/ArrowRight.svg';
import {ReactComponent as ArrowL} from '../../../images/icons/ArrowLeft.svg';
import {ReactComponent as Menu} from '../../../images/icons/List.svg';
import {AiOutlineEdit} from 'react-icons/ai';
import {VscChromeClose} from 'react-icons/vsc';
import {MdLogout, MdLogin} from 'react-icons/md';
import {MdDone} from 'react-icons/md';
import {AiOutlineDelete} from 'react-icons/ai';


export const Button = ({type, content, fill, hfill, iconType, onClick, width, borderColor, p, bold, w, h, mt}) => {

    return (
        <Btn type={type} onClick={onClick} width={width} borderColor={borderColor} p={p} bold={bold} mt={mt}>
                {iconType &&
                <StyledIcon fill={fill} hfill={hfill} w={w} h={h} 
                    as={iconType === 'user' ? User :
                    iconType === 'rocket' ? Rocket :
                    iconType === 'mail' ? Mail :
                    iconType === 'eye' ? Eye :
                    iconType === 'rocketlaunch' ? RocketLaunch :
                    iconType === 'plus' ? Plus :
                    iconType === 'edit' ? AiOutlineEdit :
                    iconType === 'close' ? VscChromeClose :
                    iconType === 'logout' ? MdLogout :
                    iconType === 'login' ? MdLogin :
                    iconType === 'wallet' ? Wallet :
                    iconType === 'done' ? MdDone :
                    iconType === 'arrowr' ? ArrowR :
                    iconType === 'arrowl' ? ArrowL :
                    iconType === 'menu' ? Menu :
                    iconType === 'delete' ? AiOutlineDelete :
                    null}   
                />
                }
            {content}
        </Btn>
    )
};