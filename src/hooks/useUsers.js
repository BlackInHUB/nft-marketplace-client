import { useSelector } from "react-redux";
import { getUser, getAllUsers, getIsLoggedIn } from "../redux/user/userSelectors";

export const useUsers = () => {
    const user = useSelector(getUser);
    const isLoggedIn = useSelector(getIsLoggedIn);
    const allUsers = useSelector(getAllUsers);

    return {user, isLoggedIn, allUsers};
};
