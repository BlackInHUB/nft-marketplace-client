import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import nftOperations from "../redux/nft/nftOperations";
import Nft from "../components/Nft/Nft";
import { useEffect } from "react";

const NftPage = () => {
    const {_id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(nftOperations.getDetails(_id));
    }, [_id, dispatch]);

    return (
        <Nft />
    )
};

export default NftPage;