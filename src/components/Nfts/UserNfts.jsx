import {NftsList} from "../NftsList/NftsList";
import { useNfts } from "../../hooks/useNfts";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import nftOperations from "../../redux/nft/nftOperations";
import { UserNftsTabBar } from "../NftTabBars/UserNftsTabBar";
import { AddNftModal } from "../AddNftModal/AddNftModal";

export const UserNfts = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('created');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const {usersNft} = useNfts();

    useEffect(() => {
        dispatch(nftOperations.getUsersNft());
    }, [dispatch]);

    const handleNftAdd = (newNft) => {
        const data = new FormData();

        for (let key in newNft) {
            if (key === 'imageUrl') {
                data.append(key, newNft[key][0]);
            };
            if (key === 'details') {
                data.append(key, JSON.stringify(newNft[key]));
            };
            data.append(key, newNft[key]);
        };
        dispatch(nftOperations.addNft(data));
        toggleModal();
    };

    const toggleModal = () => {
        if (modalOpen) {
            setTimeout(() => {
                setModalOpen(!modalOpen);
            }, 500);
            setModalShow(!modalShow)
            return;
        }
        setModalOpen(!modalOpen);
        setTimeout(() => {
            setModalShow(!modalShow);
        }, 1);
    };

    return (
        <>
            <UserNftsTabBar toggleModal={toggleModal} setCategory={setCategory} category={category} />
            <NftsList nfts={usersNft[category]} />
            {modalOpen &&
            createPortal(
                <AddNftModal modalOpen={modalOpen} toggleModal={toggleModal} show={modalShow} onSubmit={handleNftAdd} />,
                document.querySelector('#modal-root')
            )
            }
        </>
    )
};