import { List, ListItem } from "./UserMenuList.styled";
import { Button } from "../BaseComponents/Buttons/Button";
import { useDispatch } from "react-redux";
import userOperations from "../../redux/user/userOperations";
import { NavLink } from "react-router-dom";

export const UserMenuList = ({menuToggle}) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
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
                        fill='text'
                        hfill='accent'
                        width='fit-content'
                        p='0'
                        onClick={menuToggle}
                    />
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to='/nfts'>
                    <Button 
                        type='button' 
                        iconType='storefront' 
                        borderColor='transparent' 
                        content='My NFTs'
                        bold='false'
                        fill='text'
                        hfill='accent'
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
                    fill='text'
                    hfill='accent'
                    width='fit-content'
                    p='0'
                />
            </ListItem>
            <ListItem>
                <Button 
                    type='button' 
                    iconType='logout' 
                    borderColor='transparent' 
                    content='Log out' 
                    bold='false' 
                    fill='text'
                    hfill='accent'
                    width='fit-content'
                    p='0'
                    onClick={handleLogout}
                />
            </ListItem>
        </List>
    )
}