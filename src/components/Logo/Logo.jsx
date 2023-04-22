import { LogoLink, LogoIcon, LogoText } from "./Logo.styled";

export const Logo = ({footer}) => {
    return (
        <LogoLink to='/'>
            <LogoIcon footer={footer} />
            <LogoText footer={footer} />
        </LogoLink>
    )
}