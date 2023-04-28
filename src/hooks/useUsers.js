import { useSelector } from "react-redux";
import { getUser, getAllUsers, getIsLoggedIn, getProfile } from "../redux/user/userSelectors";

export const useUsers = () => {
    const user = useSelector(getUser);
    const isLoggedIn = useSelector(getIsLoggedIn);
    const allUsers = useSelector(getAllUsers);
    const profile = useSelector(getProfile);

    return {user, isLoggedIn, allUsers, profile};
};
