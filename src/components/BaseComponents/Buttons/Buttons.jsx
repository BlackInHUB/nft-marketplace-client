import { Btn, RocketIcon, MailIcon, EyeIcon, UserIcon, IconBtn, CloseIcon, MenuIcon, RocketLaunchIcon } from "./Buttons.styled"

export const Button = ({content, color, bg, type, iconType, onClick, width, borderColor}) => {

    return (
        <Btn onClick={onClick} type={type} color={color} bg={bg} width={width} borderColor={borderColor}>
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
            null
            }
            {content}
        </ Btn>
    )
};

export const IconButton = ({iconType, onClick, width, height, top, right}) => {
    return (
        <IconBtn onClick={onClick} type='button' top={top} right={right} >
            {iconType === 'menu' ?
            <MenuIcon width={width} height={height}/> :
            iconType === 'close' ?
            <CloseIcon width={width} height={height} /> :
            null
            }
        </IconBtn>
    )
};