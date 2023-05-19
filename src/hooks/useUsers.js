import { useSelector } from "react-redux";
import { getUser, getAllUsers, getIsLoggedIn, getProfile, getToken, getIsRefreshing, getUserLoading } from "../redux/user/userSelectors";

export const useUsers = () => {
    const user = useSelector(getUser);
    const isRefreshing = useSelector(getIsRefreshing);
    const token = useSelector(getToken);
    const isLoggedIn = useSelector(getIsLoggedIn);
    const allUsers = useSelector(getAllUsers);
    const profile = useSelector(getProfile);
    const userLoading = useSelector(getUserLoading);

    return {user, isLoggedIn, allUsers, profile, token, isRefreshing, userLoading};
};
