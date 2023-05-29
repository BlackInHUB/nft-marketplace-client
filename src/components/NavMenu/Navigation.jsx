import {BtnsList, BtnsListItem, Nav, NavList, NavListItem, NavListItemLink, NavLstBtnLink } from './NavMenu.styled';
import { Button } from '../BaseComponents/Buttons/Button';
import { useUsers } from '../../hooks/useUsers';

export const Navigation = ({menuToggle}) => {
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
                        <NavLstBtnLink to='/register'>
                            <Button 
                                onClick={menuToggle}
                                content='Sign Up'
                                type='button'
                                iconType='user'
                                fill='accent'
                                hfill='text'
                                p='12px 30px'
                            />
                        </NavLstBtnLink>
                    </BtnsListItem>
                <BtnsListItem>
                    <NavLstBtnLink to='/login'>
                        <Button 
                            onClick={menuToggle} 
                            content='Log In'
                            iconType='login' 
                            type='button'
                            fill='accent'
                            hfill='text'
                            w='25px'
                            h='25px'
                            p='12px 30px'
                        />
                    </NavLstBtnLink>
                </BtnsListItem>
            </BtnsList>
            }
        </Nav>
    )
}