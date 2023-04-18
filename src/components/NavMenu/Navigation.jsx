import {BtnsList, BtnsListItem, Nav, NavList, NavListItem, NavListItemLink } from './NavMenu.styled';
import { Button } from '../BaseComponents/Buttons/Button';
import { useUsers } from '../../hooks/useUsers';

export const Navigation = ({registerToggle, loginToggle}) => {
    const {isLoggedIn} = useUsers();

    return (
        <Nav>
            <NavList>
                <NavListItem>
                    <NavListItemLink to='/marketplace'>Marketplace</NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink to='/rankings'>Rankings</NavListItemLink>
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
                        fill='purple'
                        hfill='white'
                    />
                </BtnsListItem>
                <BtnsListItem>
                    <Button 
                        onClick={loginToggle} 
                        content='Log In' 
                        borderColor='transparent'
                        type='button'
                    />
                </BtnsListItem>
            </BtnsList>
            }
        </Nav>
    )
}