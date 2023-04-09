import { Btn, RocketIcon, MailIcon, EyeIcon, UserIcon, IconBtn, CloseIcon, MenuIcon, EditIcon, RocketLaunchIcon, PlusIcon, DoneIcon } from "./Buttons.styled"

export const Button = ({content, color, bg, type, iconType, onClick, width, borderColor, pr, pl, pb, pt}) => {

    return (
        <Btn onClick={onClick} type={type} color={color} bg={bg} width={width} borderColor={borderColor} pr={pr} pl={pl} pt={pt} pb={pb}>
            {iconType === 'user' ?
            <UserIcon /> :
            iconType === 'rocket' ?
            <RocketIcon /> :
            iconType === 'mail' ? 
            <MailIcon /> :
            iconType === 'eye' ?
            <EyeIcon /> :
            iconType === 'rocketlaunch' ?
            <RocketLaunchIcon /> :
            iconType === 'plus' ?
            <PlusIcon /> :
            iconType === 'edit' ?
            <EditIcon /> :
            iconType === 'close' ?
            <CloseIcon /> :
            null
            }
            {content}
        </ Btn>
    )
};

export const IconButton = ({iconType, onClick, w, h, top, right, position, ml, iconColor}) => {
    return (
        <IconBtn onClick={onClick} type='button' top={top} right={right} position={position} ml={ml} iconColor={iconColor}>
            {iconType === 'menu' ?
            <MenuIcon w={w} h={h}/> :
            iconType === 'close' ?
            <CloseIcon w={w} h={h} /> :
            iconType === 'edit' ?
            <EditIcon w={w} h={h} /> :
            iconType === 'done' ?
            <DoneIcon /> :
            iconType === 'plus' ?
            <PlusIcon w={w} h={h} /> :
            null
            }
        </IconBtn>
    )
};