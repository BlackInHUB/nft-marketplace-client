import { List, ListItem, ListItemLink, StyledIcon } from "./UserMenuList.styled";
import {ReactComponent as User} from '../../images/icons/User.svg';
import {ReactComponent as Wallet} from '../../images/icons/Wallet.svg';
import {MdLogout} from 'react-icons/md';
import { useDispatch } from "react-redux";
import userOperations from "../../redux/user/userOperations";

export const UserMenuList = ({menuToggle}) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        menuToggle();
        dispatch(userOperations.logout());
    };

    return (
        <List>
            <ListItem>
                <ListItemLink to='/userpage' onClick={menuToggle}>
                    <StyledIcon as={User} />
                    My profile
                </ListItemLink>
            </ListItem>
            <ListItem>
                <ListItemLink to='/userpage' onClick={menuToggle}>
                    <StyledIcon as={Wallet} />
                    Connect a wallet
                </ListItemLink>
            </ListItem>
            <ListItem>
                <ListItemLink to='/' onClick={handleLogout}>
                    <StyledIcon as={MdLogout} />
                    Logout
                </ListItemLink>
            </ListItem>
        </List>
    )
}