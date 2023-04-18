import { Header, LogoLink, LogoText, LogoIcon, Wrapper } from "./NavMenu.styled";
import { IconButton } from "../BaseComponents/Buttons/IconButton";
import { Navigation } from "./Navigation";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { Register } from "../AuthComponents/Register";
import { Login } from "../AuthComponents/Login";
import { useMQ } from '../../hooks/useMQ';
import { useUsers } from "../../hooks/useUsers";
import { createPortal } from "react-dom";
import { UserMenuList } from "../UserMenuList/UserMenuList";

export const NavMenu = ({edit, setEdit}) => {
    const {user, isLoggedIn} = useUsers();
    const {isDesktop} = useMQ();
    const [menuOpen, setMenuOpen] = useState({mainMenu: false, userMenu: false});
    const [menuShow, setMenuShow] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const menuToggle = (menu) => {
        if (menuOpen.mainMenu) {
            setMenuShow(false)
            setTimeout(() => [
                setMenuOpen({...menuOpen, mainMenu: false})
            ], 250)
            return;
        };
        if (menuOpen.userMenu) {
            setMenuShow(false)
            setTimeout(() => {
                setMenuOpen({...menuOpen, userMenu: false})
            }, 250)
            return;
        }

        setMenuOpen({...menuOpen, [menu]: !menuOpen[menu]});
        setTimeout(() => {
            setMenuShow(true)
        }, 1);
    };

    const registerToggle = () => {
        if (menuOpen.mainMenu) {
            menuToggle();
        }
        if (isLoginOpen) {
            setIsLoginOpen(!isLoginOpen);
        };
        setIsRegisterOpen(!isRegisterOpen);
    };

    const loginToggle = () => {
        if (menuOpen.mainMenu) {
            menuToggle();
        }
        if (isRegisterOpen) {
            setIsRegisterOpen(!isRegisterOpen);
        };
        setIsLoginOpen(!isLoginOpen);
    };

    return (
        <>
        <Header>
            <LogoLink to='/'>
                <LogoIcon />
                <LogoText />
            </LogoLink>
            <Wrapper>
                {!isDesktop ?
                    <IconButton
                        type='button'
                        position='static'
                        w='25px'
                        h='25px'
                        iconType='menu'
                        onClick={() => menuToggle('mainMenu')} 
                    /> :
                    <Navigation registerToggle={registerToggle} loginToggle={loginToggle} />
                }
                {isLoggedIn && 
                    <IconButton
                        type='button'
                        onClick={() => menuToggle('userMenu')}
                        ml='15px'
                        position='static'
                        iconType='avatar'
                        avatarUrl={user.avatarUrl}
                    />}
                {menuOpen.userMenu && 
                    <Modal 
                        position='absolute'
                        menuShow={menuShow}
                        children={<UserMenuList menuToggle={menuToggle} setEdit={setEdit} edit={edit} />}
                        type='userMenu'
                        menuToggle={menuToggle}
                    />
                }
            </Wrapper>
        </Header>
        {!isDesktop && menuOpen.mainMenu && 
            createPortal(
                <Modal 
                    menuShow={menuShow}
                    children={<Navigation 
                    loginToggle={loginToggle} 
                    registerToggle={registerToggle} 
                    menuToggle={menuToggle}
                    />}
                    menuToggle={menuToggle}
                />,
            document.querySelector('#modal-root')
        )}
        {isRegisterOpen && <Register isOpen={isRegisterOpen} registerToggle={registerToggle} />}
        {isLoginOpen && <Login isOpen={isLoginOpen} loginToggle={loginToggle} />}
        </>
    )
}