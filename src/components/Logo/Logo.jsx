import { LogoLink, LogoIcon, LogoText } from "./Logo.styled";

export const Logo = () => {
    return (
        <LogoLink to='/'>
            <LogoIcon />
            <LogoText />
        </LogoLink>
    )
}