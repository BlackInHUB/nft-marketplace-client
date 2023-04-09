import { Btn, RocketIcon, MailIcon, EyeIcon, UserIcon, IconBtn, CloseIcon, MenuIcon, EditIcon, RocketLaunchIcon, PlusIcon } from "./Buttons.styled"

export const Button = ({content, color, bg, type, iconType, onClick, width, borderColor, pr, pl}) => {

    return (
        <Btn onClick={onClick} type={type} color={color} bg={bg} width={width} borderColor={borderColor} pr={pr} pl={pl}>
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

export const IconButton = ({iconType, onClick, width, height, top, right, position, ml}) => {
    return (
        <IconBtn onClick={onClick} type='button' top={top} right={right} position={position} ml={ml}>
            {iconType === 'menu' ?
            <MenuIcon width={width} height={height}/> :
            iconType === 'close' ?
            <CloseIcon width={width} height={height} /> :
            iconType === 'edit' ?
            <EditIcon width={width} height={height} /> :
            null
            }
        </IconBtn>
    )
};