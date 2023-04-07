import { useSelector } from "react-redux";
import { getUser, getIsLoggedIn } from "../redux/user/userSelectors";

export const useUsers = () => {
    const user = useSelector(getUser);
    const isLoggedIn = useSelector(getIsLoggedIn);

    return {user, isLoggedIn};
};
