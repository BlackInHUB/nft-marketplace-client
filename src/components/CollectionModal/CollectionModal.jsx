import { useNfts } from "../../hooks";
import {
    ModalBackdrop,
    ModalContainer,
    Form,
    TitleLabel,
    TitleInput,
    ImgLabel,
    ImgInput,
    ListTitle,
    FormList,
    FormListItem
} from "./CollectionModal.styled";
import { IconButton } from "../BaseComponents/Buttons/IconButton";
import {Button} from '../BaseComponents/Buttons/Button';
import { useEffect, useRef } from "react";
import { useEscapeKey } from "../../hooks";
import { useState } from "react";

export const CollectionModal = ({show, toggleModal, modalOpen, initialState, onSubmit, btnText, title}) => {
    const ref = useRef();
    const {usersNft} = useNfts();
    const [collection, setCollection] = useState(initialState);

    const handleChange = (e) => {
        if (e.target.name === 'nft') {
            const {id} = e.target;

            setCollection(prevState => {
                if (prevState.nfts.includes(id)) {
                    return {...prevState, nfts: prevState.nfts.filter(item => item !== id)};
                };
                return {...prevState, nfts: [...prevState.nfts, id]};
            });
        };
        if (e.target.name === 'title') {
            setCollection(prevState => {
                return {...prevState, title: e.target.value}
            });
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!collection.title || collection.nfts.length <= 1) {
            return alert('Enter collection title and choose at least 2 nft!')
        };
        
        onSubmit(collection);
        toggleModal();
    };

    useEscapeKey(toggleModal);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        };

        const handleClick = (e) => {
            if (modalOpen && ref.current && !ref.current.contains(e.target)) {
                toggleModal();
            };
        };

        document.addEventListener('mousedown', handleClick);

        return () => {document.removeEventListener('mousedown', handleClick); document.body.style.overflow = 'unset'};
    }, [modalOpen, toggleModal]);

    return (
        <ModalBackdrop>
            <ModalContainer show={show} ref={ref}>
                <IconButton right='15px' iconType='close' type='button' onClick={toggleModal} />
                <Form onSubmit={handleSubmit}>
                    <TitleLabel>{title}
                        <TitleInput type='text' name='title' value={collection.title} placeholder="Collection name?" onChange={handleChange} />
                    </TitleLabel>
                    <ListTitle>Choose NFTs:</ListTitle>
                    <FormList>
                        {usersNft.created.map(nft => <FormListItem key={nft._id}><ImgLabel bg={nft.imageUrl}><ImgInput name='nft' id={nft._id} type='checkbox' checked={collection.nfts.includes(nft._id)} onChange={handleChange} /></ImgLabel></FormListItem>)}
                    </FormList>
                    <Button type='submit' content={btnText} />
                </Form>
            </ModalContainer>
        </ModalBackdrop>
    )
};