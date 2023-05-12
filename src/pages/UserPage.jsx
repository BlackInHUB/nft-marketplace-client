import { UserData } from "../components/UserData/UserData";
import { useEffect } from "react";

const UserPage = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, [])

    return (
        <>
            <UserData />
        </>
    );
};

export default UserPage;