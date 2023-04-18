import { List, ListItem } from "./UserMenuList.styled";
import { Button } from "../BaseComponents/Buttons/Button";
import { useDispatch } from "react-redux";
import userOperations from "../../redux/user/userOperations";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";

export const UserMenuList = ({edit, setEdit, menuToggle}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/userpage') {
            setEdit(false);
        };
    }, [location.pathname, setEdit])

    const handleEdit = () => {
        if (location.pathname !== '/userpage') {
            navigate('/userpage');
        };
        setEdit(!edit);
        menuToggle();
    }

    const handleLogout = () => {
        if(edit) {
            setEdit(!edit);
        };
        menuToggle();
        dispatch(userOperations.logout());
    };

    return (
        <List>
            <ListItem>
                <NavLink to='/userpage'>
                    <Button 
                        type='button' 
                        iconType='user' 
                        borderColor='transparent' 
                        content='My profile'
                        bold='false'
                        fill='white'
                        hfill='purple'
                        width='fit-content'
                        p='0'
                        onClick={menuToggle}
                    />
                </NavLink>
            </ListItem>
            <ListItem>
                <Button 
                    type='button' 
                    iconType='wallet' 
                    borderColor='transparent' 
                    content='Connect a wallet'
                    bold='false'
                    fill='white'
                    hfill='purple'
                    width='fit-content'
                    p='0'
                />
            </ListItem>
            <ListItem>
                <Button 
                    type='button' 
                    iconType={edit ? 'close' : 'edit'} 
                    borderColor='transparent' 
                    content={edit ? 'Close editor' : 'Edit profile'}
                    bold='false' 
                    fill='white'
                    hfill='purple'
                    width='fit-content'
                    p='0'
                    onClick={handleEdit}
                />
            </ListItem>
            <ListItem>
                <Button 
                    type='button' 
                    iconType='logout' 
                    borderColor='transparent' 
                    content='Log out' 
                    bold='false' 
                    fill='white'
                    hfill='purple'
                    width='fit-content'
                    p='0'
                    onClick={handleLogout}
                />
            </ListItem>
        </List>
    )
}