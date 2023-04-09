import {BtnsList, BtnsListItem, Nav, NavList, NavListItem, NavListItemLink } from './NavMenu.styled';
import { Button } from '../BaseComponents/Buttons/Buttons';
import { useUsers } from '../../hooks/useUsers';
import { useDispatch } from 'react-redux';
import userOperations from '../../redux/user/userOperations';

export const Navigation = ({registerToggle, loginToggle, menuToggle}) => {
    const {isLoggedIn} = useUsers();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userOperations.logout());
    };

    return (
        <Nav>
            <NavList>
                <NavListItem>
                    <NavListItemLink to='/marketplace'>Marketplace</NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink to='/rankings'>Rankings</NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink to='/wallet'>Connect a wallet</NavListItemLink>
                </NavListItem>
            </NavList>
            <BtnsList>
                <BtnsListItem>
                    {!isLoggedIn ? 
                    (<Button 
                        onClick={registerToggle} 
                        content={'Sign Up'} 
                        color={'white'} 
                        bg={'purple'} 
                        type={'button'} 
                        iconType={'user'}
                    />) : 
                    (<NavListItemLink to='/userpage' onClick={menuToggle}>My profile</NavListItemLink>)}
                </BtnsListItem>
                <BtnsListItem>
                    {!isLoggedIn ? 
                    (<Button 
                        onClick={loginToggle} 
                        content={'Log In'} 
                        color={'white'} 
                        borderColor={'transparent'}
                        type={'button'} 
                    />) :
                    (<Button 
                        onClick={handleLogout} 
                        content={'Log Out'} 
                        color={'white'} 
                        type={'button'} 
                    />)
                }
                </BtnsListItem>
            </BtnsList>
        </Nav>
    )
}