import {NftsList} from "../NftsList/NftsList";
import { useNfts } from "../../hooks/useNfts";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import nftOperations from "../../redux/nft/nftOperations";
import { ProfileNftsTabBar } from "../NftTabBars/ProfileNftsTabBar";
import { useParams } from "react-router-dom";

export const ProfileNfts = () => {
    const {_id} = useParams();
    const dispatch = useDispatch();
    const [category, setCategory] = useState('created');
    const {profileNft} = useNfts();

    useEffect(() => {
        dispatch(nftOperations.getProfileNft(_id));
    }, [dispatch, _id]);

    return (
        <>
            <ProfileNftsTabBar nfts={profileNft} setCategory={setCategory} category={category} />
            <NftsList nfts={profileNft[category]} />
        </>
    )
};