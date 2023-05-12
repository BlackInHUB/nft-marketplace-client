import { Navigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

export const PublicRoute = ({children}) => {
    const {isLoggedIn} = useUsers();

    return isLoggedIn ? <Navigate to={'/userpage'} /> : children;
};
