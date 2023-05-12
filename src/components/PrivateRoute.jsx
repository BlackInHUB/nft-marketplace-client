import { useUsers } from "../hooks/useUsers";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const {isLoggedIn, isRefreshing, token} = useUsers();

    const redirect = !isLoggedIn && !isRefreshing && !token;

    return redirect ? <Navigate to='/'/> : children;
};
