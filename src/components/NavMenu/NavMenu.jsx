import { Header, Wrapper } from './NavMenu.styled';
import { IconButton } from '../BaseComponents/Buttons/IconButton';
import { Logo } from '../Logo/Logo';
import { Navigation } from './Navigation';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { useMQ } from '../../hooks/useMQ';
import { useUsers } from '../../hooks/useUsers';
import { createPortal } from 'react-dom';
import { UserMenuList } from '../UserMenuList/UserMenuList';

export const NavMenu = ({ edit, setEdit }) => {
  const { user, isLoggedIn } = useUsers();
  const { isDesktop } = useMQ();
  const [menuOpen, setMenuOpen] = useState({ mainMenu: false, userMenu: false });
  const [menuShow, setMenuShow] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const menuToggle = menu => {
    if (menuOpen[menu]) {
      setMenuShow(false);
      setTimeout(() => [setMenuOpen({ ...menuOpen, [menu]: false })], 250);
      return;
    }

    setMenuOpen({ ...menuOpen, [menu]: true });
    setTimeout(() => {
      setMenuShow(true);
    }, 1);
  };

  const registerToggle = () => {
    if (menuOpen.mainMenu) {
      menuToggle('mainMenu');
    }
    if (isLoginOpen) {
      setIsLoginOpen(!isLoginOpen);
    }
    setIsRegisterOpen(!isRegisterOpen);
  };

  const loginToggle = () => {
    if (menuOpen.mainMenu) {
      menuToggle('mainMenu');
    }
    if (isRegisterOpen) {
      setIsRegisterOpen(!isRegisterOpen);
    }
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <>
      <Header>
        <Logo />
        <Wrapper>
          {!isDesktop ? (
            <IconButton
              type="button"
              position="static"
              w="25px"
              h="25px"
              iconType="menu"
              onClick={() => menuToggle('mainMenu')}
            />
          ) : (
            <Navigation registerToggle={registerToggle} loginToggle={loginToggle} />
          )}
          {isLoggedIn && (
            <IconButton
              type="button"
              onClick={() => menuToggle('userMenu')}
              ml="15px"
              position="static"
              iconType="avatar"
              avatarUrl={user.avatarUrl}
            />
          )}
        </Wrapper>
      </Header>
      {menuOpen.userMenu &&
        createPortal(
          <Modal
            position="absolute"
            menuShow={menuShow}
            children={
              <UserMenuList
                menuToggle={() => menuToggle('userMenu')}
                setEdit={setEdit}
                edit={edit}
              />
            }
            type="userMenu"
            menuToggle={menuToggle}
          />,
          document.querySelector('#modal-root')
        )}
      {!isDesktop &&
        menuOpen.mainMenu &&
        createPortal(
          <Modal
            type="mainMenu"
            menuShow={menuShow}
            children={
              <Navigation
                loginToggle={loginToggle}
                registerToggle={registerToggle}
                menuToggle={() => menuToggle('mainMenu')}
              />
            }
            menuToggle={menuToggle}
          />,
          document.querySelector('#modal-root')
        )}
    </>
  );
};
