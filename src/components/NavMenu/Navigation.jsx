import {BtnsList, BtnsListItem, Nav, NavList, NavListItem, NavListItemLink } from './NavMenu.styled';
import { Button } from '../BaseComponents/Buttons/Buttons';
import { useUsers } from '../../hooks/useUsers';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userOperations from '../../redux/user/userOperations';

export const Navigation = ({registerToggle, loginToggle}) => {
    const {isLoggedIn} = useUsers();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userOperations.logout());
    };

    return (
        <Nav>
            <NavList>
                <NavListItem>
                    <NavListItemLink>Marketplace</NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink>Rankings</NavListItemLink>
                </NavListItem>
                <NavListItem>
                    <NavListItemLink>Connect a wallet</NavListItemLink>
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
                    (<Button
                        onClick={() => navigate('/userpage')} 
                        content={'My profile'} 
                        color={'white'} 
                        bg={'purple'} 
                        type={'button'} 
                        // iconType={'user'}
                    />)}
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
                        borderColor={'transparent'}
                        type={'button'} 
                    />)
                }
                </BtnsListItem>
            </BtnsList>
        </Nav>
    )
}