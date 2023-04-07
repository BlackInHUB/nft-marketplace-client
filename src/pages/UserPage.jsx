import { useUsers } from "../hooks/useUsers";
import { UserData } from "../components/UserData/UserData";

const UserPage = () => {
    const {user} = useUsers();
    console.log(user)

    return (
        <>
            <UserData user={user} />
        </>
    );
};

export default UserPage;