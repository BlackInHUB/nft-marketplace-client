import { NftsContainer } from "./Nfts.styled";
import { TabBar } from "./TabBar/TabBar";
import {AddNftModal} from './AddNftModal/AddNftModal';
import { createPortal } from "react-dom";
import { useState } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import nftOperations from "../../redux/nft/nftOperations";
import { useDispatch } from "react-redux";

export const Nfts = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleNftAdd = (newNft) => {
        const data = new FormData();

        Object.keys(newNft).forEach(item => {
            if(item === 'imageUrl') {
                data.append([item], newNft[item][0]);
            };
            
            data.append([item], newNft[item]);
        });

        dispatch(nftOperations.add(data));
        toggleModal();
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <>
        <NftsContainer>
            <TabBar modalOpen={modalOpen} toggleModal={toggleModal} />
            <Suspense>
                <Outlet />
            </Suspense>
        </NftsContainer>
        {modalOpen &&
            createPortal(
                <AddNftModal modalOpen={modalOpen} toggleModal={toggleModal} onSubmit={handleNftAdd} />,
                document.querySelector('#modal-root')
            )
        }
        </>
    )
}