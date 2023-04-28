import { ProfileData } from "../components/UserData/ProfileData";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import userOperations from "../redux/user/userOperations";
import nftOperations from "../redux/nft/nftOperations";
import { useUsers, useNfts } from "../hooks";

const ProfilePage = () => {
    const {_id} = useParams();
    const dispatch = useDispatch();
    const {profile} = useUsers();
    const {profileNft} = useNfts();
    
    useEffect(() => {
        if (!_id) {
            return;
        };

        dispatch(userOperations.getProfile(_id));
        dispatch(nftOperations.getProfileNft(_id));
    }, [_id, dispatch]);

    if (!profile || !profileNft) {
        return;
    };

    return (
        <ProfileData />
    )
};

export default ProfilePage;