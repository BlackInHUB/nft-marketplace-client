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
import {ReactComponent as Storefront} from '../../../images/icons/Storefront.svg';
import {ReactComponent as Copy} from '../../../images/icons/Copy.svg';
import {AiOutlineEdit} from 'react-icons/ai';
import {VscChromeClose} from 'react-icons/vsc';
import {MdLogout, MdLogin} from 'react-icons/md';
import {MdDone} from 'react-icons/md';
import {AiOutlineDelete} from 'react-icons/ai';


export const Button = ({disabled, type, content, iconType, onClick, width, p, w, h, mt}) => {
    
    return (
        <Btn type={type} disabled={disabled} onClick={onClick} width={width} p={p} mt={mt}>
                {iconType &&
                <StyledIcon w={w} h={h} 
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
                    iconType === 'storefront' ? Storefront :
                    iconType === 'copy' ? Copy :
                    null}   
                />
                }
            {content}
        </Btn>
    )
};