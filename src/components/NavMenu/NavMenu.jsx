import { Header, Logo, LogoLink } from "./NavMenu.styled";
import { IconButton } from "../BaseComponents/Buttons/Buttons";
import { Navigation } from "./Navigation";
import { MenuModal } from "../MenuModal/MenuModal";
import { useState } from "react";
import { Register } from "../AuthComponents/Register";
import {Login} from "../AuthComponents/Login";
import { useMQ } from '../../hooks/useMQ';

export const NavMenu = () => {
    const {isDesktop} = useMQ();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const registerToggle = () => {
        if (isMenuOpen) {
            setIsMenuOpen(!isMenuOpen);
        };
        if (isLoginOpen) {
            setIsLoginOpen(!isLoginOpen);
        };
        setIsRegisterOpen(!isRegisterOpen);
    };

    const loginToggle = () => {
        if (isMenuOpen) {
            setIsMenuOpen(!isMenuOpen);
        };
        if (isRegisterOpen) {
            setIsRegisterOpen(!isRegisterOpen);
        };
        setIsLoginOpen(!isLoginOpen);
    };

    return (
        <>
        <Header>
            <LogoLink to='/'>
                <Logo />
            </LogoLink>
            {!isDesktop ?
                (<IconButton iconType='menu' onClick={menuToggle} />) :
                (<Navigation registerToggle={registerToggle} loginToggle={loginToggle} />)}
        </Header>
        {!isDesktop && isMenuOpen && <MenuModal 
                                        isOpen={isMenuOpen} 
                                        children={<Navigation 
                                        loginToggle={loginToggle} 
                                        registerToggle={registerToggle} 
                                        menuToggle={menuToggle}
                                        />}
                                        menuToggle={menuToggle}
                                    />}
        {isRegisterOpen && <Register isOpen={isRegisterOpen} registerToggle={registerToggle} />}
        {isLoginOpen && <Login isOpen={isLoginOpen} loginToggle={loginToggle} />}
        </>
    )
}