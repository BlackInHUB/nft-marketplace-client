import { useEffect } from "react";
import { List } from "./NftsList.styled";
import { NftListItem } from "../NftListItem/NftListItem";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import nftOperations from "../../../redux/nft/nftOperations";
import {useNfts} from '../../../hooks/useNfts';

const NftsList = () => {
    const {category} = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(nftOperations.getUsersNft(category));
    }, [category, dispatch]);

    const {usersNft} = useNfts();

    return (
        <List>
            {usersNft[category].map(nft => <NftListItem key={nft._id} nft={nft} />)}
        </List>
    )
};

export default NftsList;