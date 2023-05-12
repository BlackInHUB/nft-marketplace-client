import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import nftOperations from "../redux/nft/nftOperations";
import Nft from "../components/Nft/Nft";
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ConfirmModal } from "../components/ConfirmModal/CnfirmModal";
import { NftModal } from '../components/NftModal/NftModal';
import { useNfts } from "../hooks";

const NftPage = () => {
    const {_id} = useParams();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [deleting, setDeleting] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('work')
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        dispatch(nftOperations.getDetails(_id));
    }, [_id, dispatch]);

    const {nftDetails} = useNfts();

    if (!nftDetails.nft) {
        return;
    };

    const toggleEditOpen = () => {
        if (edit) {
            setTimeout(() => {
                setEdit(!edit);
            }, 500);
            setShow(!show)
            return;
        }
        setEdit(!edit);
        setTimeout(() => {
            setShow(!show);
        }, 1);
    };

    const submitUpdateNft = (data) => {
        dispatch(nftOperations.updateNft(data));
        toggleEditOpen();
    };

    const deletingModalToggle = (_id) => {
        if (deleting) {
            setTimeout(() => {
                setDeleting(null);
            }, 250);
            setShow(!show)
            return;
        }
        setDeleting(_id)
        setTimeout(() => {
            setShow(!show)
        }, 1);
    };

    const deleteNft = () => {
        dispatch(nftOperations.deleteNft(deleting));
        setDeleting(null);
        navigate('/userpage');
    };

    return (
        <>
            <Nft nftDetails={nftDetails} deleteNft={deletingModalToggle} toggleEditOpen={toggleEditOpen} submitUpdateNft={submitUpdateNft} edit={edit} show={show} />
            {deleting && createPortal(
                <ConfirmModal text={`Delete NFT "${nftDetails.nft.title}"?`} confirm={deleteNft} cancel={deletingModalToggle} show={show} />,
                document.querySelector('#modal-root')
            )}
            {edit && createPortal(
                <NftModal onSubmit={submitUpdateNft} type='edit' toggleModal={toggleEditOpen} initialState={nftDetails.nft} show={show} modalOpen={edit} sumbitText='Confirm edit' />,
                document.querySelector('#modal-root')
            )}
        </>
    )
};

export default NftPage;