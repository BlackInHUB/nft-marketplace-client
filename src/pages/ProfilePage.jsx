import { ProfileData } from "../components/UserData/ProfileData";
import { useEffect } from "react";

const ProfilePage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);

    return (
        <ProfileData />
    )
};

export default ProfilePage;