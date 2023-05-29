import {BtnsList, BtnsListItem, Nav, NavList, NavListItem, NavListItemLink } from './NavMenu.styled';
import { Button } from '../BaseComponents/Buttons/Button';
import { useUsers } from '../../hooks/useUsers';

export const Navigation = ({menuToggle, registerToggle, loginToggle}) => {
    const {isLoggedIn} = useUsers();

    return (
        <Nav>
            <NavList>
                <NavListItem>
                    <NavListItemLink to='/marketplace' onClick={menuToggle}>Marketplace</NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink to='/rankings' onClick={menuToggle}>Rankings</NavListItemLink>
                </NavListItem>
            </NavList>
            {!isLoggedIn &&
            <BtnsList>
                <BtnsListItem>
                    <Button 
                        onClick={registerToggle} 
                        content='Sign Up'
                        type='button'
                        iconType='user'
                        fill='accent'
                        hfill='text'
                        p='12px 30px'
                    />
                </BtnsListItem>
                <BtnsListItem>
                    <Button 
                        onClick={loginToggle} 
                        content='Log In'
                        iconType='login' 
                        // borderColor='transparent'
                        type='button'
                        fill='accent'
                        hfill='text'
                        w='25px'
                        h='25px'
                        p='12px 30px'
                    />
                </BtnsListItem>
            </BtnsList>
            }
        </Nav>
    )
}