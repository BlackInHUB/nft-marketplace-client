import {NftsList} from "../NftsList/NftsList";
import { useNfts } from "../../hooks/useNfts";
import { useState } from "react";
import { ProfileNftsTabBar } from "../TabBars/ProfileNftsTabBar";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { NftsWrapper } from "./Nfts.styled";
import { CollectionList } from "../CollectionList/CollectionList";

export const ProfileNfts = () => {
    const [category, setCategory] = useState('created');
    const {profileNft} = useNfts();

    return (
        <>
            <PaddingWrapper>
                <ProfileNftsTabBar nfts={profileNft} setCategory={setCategory} category={category} />
            </PaddingWrapper>
            <NftsWrapper>
                <PaddingWrapper>
                    {category !== 'collection' ? 
                        <NftsList nfts={profileNft[category]} bg='main' /> :
                        <CollectionList collections={profileNft.collections} />
                    }
                </PaddingWrapper>
            </NftsWrapper>
        </>
    )
};