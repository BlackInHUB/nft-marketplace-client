import styled from "styled-components";
import {ReactComponent as Rocket} from '../../../images/icons/Rocket.svg';
import {ReactComponent as RocketLaunch} from '../../../images/icons/RocketLaunch.svg';
import {ReactComponent as User} from '../../../images/icons/User.svg';
import {ReactComponent as Mail} from '../../../images/icons/EyeSlash.svg';
import {ReactComponent as Eye} from '../../../images/icons/Eye.svg';
import {ReactComponent as Menu} from '../../../images/icons/List.svg';
import {ReactComponent as Plus} from '../../../images/icons/Plus.svg';
import {AiOutlineEdit} from 'react-icons/ai';
import {VscChromeClose} from 'react-icons/vsc';
import {MdDone} from 'react-icons/md';

export const Btn = styled.button`
    position: relative;
    overflow: hidden;
    background-color: transparent;
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.fz ? p.fz : p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    gap: 12px;
    font-family: inherit;
    padding-left: ${p => p.pl ? p.pl + 'px' : '50px'};
    padding-right: ${p => p.pr ? p.pr + 'px' : '50px'};
    padding-top: ${p => p.type === 'submit' ? '12px' : p.pt ? p.pt : '19px'};
    padding-bottom: ${p => p.type === 'submit' ? '12px' : p.pb ? p.pb : '19px'};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    border: ${p => p.theme.borders.main} ${p => p.borderColor ? p.borderColor : p.theme.colors.purple};
    border-radius: ${p => p.theme.radii.normal};
    transition: all 250ms ease;

    @media (min-width: 480px) {
        width: ${p => p.width ? p.width : 'fit-content;'};
    }

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        width: 0;
        height: 100%;
        background-color: ${p => p.theme.colors.purple};
        transition: inherit;
    }

    &:hover,
    &:focus-visible {
        ${p => p.borderColor === 'transparent' ? 
            `color: ${p.theme.colors.purple};` :
            `::before {width: 100%;}`
        }
    }
`

export const IconBtn = styled.button`
position: ${p => p.position ? p.position : 'absolute'};
top: ${p => p.top ? p.top + 'px' : '15px'};
right: ${p => p.right ? p.right + 'px' : '30px'};
outline: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
border: none;
transition: all 250ms ease;
margin-left: ${p => p.ml ? p.ml : '0'}
`

export const UserIcon = styled(User)`
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.colors.purple};
    transition: inherit;

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.white};
    }
    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.white};
    }
`

export const RocketIcon = styled(Rocket)`
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.colors.purple};
    transition: inherit;

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.white};
    }
    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.white};
    }
`

export const MailIcon = styled(Mail)`
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.colors.purple};
    transition: inherit;

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.white};
    }
    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.white};
    }
`

export const EyeIcon = styled(Eye)`
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.colors.purple};
    transition: inherit;

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.white};
    }
    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.white};
    }
`

export const RocketLaunchIcon = styled(RocketLaunch)`
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.colors.purple};
    transition: inherit;

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.white};
    }
    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.white};
    }
`

export const PlusIcon = styled(Plus)`
    width: ${p => p.w ? p.w + 'px' : '25px'};
    height: ${p => p.h ? p.h + 'px' : '25px'}; 
    fill: ${p => p.theme.colors.purple};
    transition: inherit;

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.white};
    }
    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.white};
    }

    ${IconBtn}:hover & {
        fill: ${p => p.theme.colors.white};
    };
    ${IconBtn}:focus-visible & {
        fill: ${p => p.theme.colors.white};
    };
`

export const CloseIcon = styled(VscChromeClose)`
    fill: ${p => p.theme.colors.white};
    width: ${p => p.w ? p.w + 'px' : '24px'};
    height: ${p => p.h ? p.h + 'px' : '24px'};
    transition: inherit;

    ${IconBtn}:hover & {
        fill: ${p => p.theme.colors.purple};
    };
    ${IconBtn}:focus-visible & {
        fill: ${p => p.theme.colors.purple};
    };

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.purple};
    };
    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.purple};
    };
`

export const DoneIcon = styled(MdDone)`
fill: ${p => p.theme.colors.white};
    width: ${p => p.w ? p.w + 'px' : '24px'};
    height: ${p => p.h ? p.h + 'px' : '24px'};
    transition: inherit;

    ${IconBtn}:hover & {
        fill: ${p => p.theme.colors.purple};
    };
    ${IconBtn}:focus-visible & {
        fill: ${p => p.theme.colors.purple};
    };

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.purple};
    };
    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.purple};
    };
`

export const MenuIcon = styled(Menu)`
    fill: ${p => p.theme.colors.white};
    width: ${p => p.w ? p.w + 'px' : '25px'};
    height: ${p => p.h ? p.h + 'px' : '25px'};
    transition: inherit;

    ${IconBtn}:hover & {
        fill: ${p => p.theme.colors.purple};
    };
    ${IconBtn}:focus-visible & {
        fill: ${p => p.theme.colors.purple};
    };
`

export const EditIcon = styled(AiOutlineEdit)`
    fill: ${p => p.theme.colors.white};
    width: ${p => p.w ? p.w + 'px' : '24px'};
    height: ${p => p.h ? p.h + 'px' : '24px'};
    transition: inherit;

    ${IconBtn}:hover & {
        fill: ${p => p.theme.colors.purple};
    };
    ${IconBtn}:focus-visible & {
        fill: ${p => p.theme.colors.purple};
    };

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.purple};
    };
    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.purple};
    };
`