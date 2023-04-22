import { TabBar } from "./TabBar/TabBar";
import {AddNftModal} from './AddNftModal/AddNftModal';
import { createPortal } from "react-dom";
import { useState } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import nftOperations from "../../redux/nft/nftOperations";
import { useDispatch } from "react-redux";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";

export const Nfts = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();

    const handleNftAdd = (newNft) => {
        const data = new FormData();

        Object.keys(newNft).forEach(item => {
            if(item === 'imageUrl') {
                data.append([item], newNft[item][0]);
            };
            
            data.append([item], newNft[item]);
        });

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
            <PaddingWrapper>
                <TabBar modalOpen={modalOpen} toggleModal={toggleModal} />
                <Suspense>
                    <Outlet />
                </Suspense>
            </PaddingWrapper>
            {modalOpen &&
                createPortal(
                    <AddNftModal modalOpen={modalOpen} toggleModal={toggleModal} show={modalShow} onSubmit={handleNftAdd} />,
                    document.querySelector('#modal-root')
                )
            }
        </>
    )
}