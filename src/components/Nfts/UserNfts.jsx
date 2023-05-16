import {NftsList} from "../NftsList/NftsList";
import { useNfts } from "../../hooks/useNfts";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import nftOperations from "../../redux/nft/nftOperations";
import { UserNftsTabBar } from "../NftTabBars/UserNftsTabBar";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { NftsWrapper } from "./Nfts.styled";
import { CollectionList } from "../CollectionList/CollectionList";

export const UserNfts = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('created');
    const {usersNft} = useNfts();

    useEffect(() => {
        dispatch(nftOperations.getUsersNft());
    }, [dispatch]);

    return (
        <>
            <PaddingWrapper>
                <UserNftsTabBar setCategory={setCategory} category={category} />
            </PaddingWrapper>
            <NftsWrapper>
                <PaddingWrapper>
                    {category !== 'collection' ? 
                        <NftsList nfts={usersNft[category]} /> :
                        <CollectionList collections={usersNft.collections} />
                    }
                </PaddingWrapper>
            </NftsWrapper>
        </>
    )
};