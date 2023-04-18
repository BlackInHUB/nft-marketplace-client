import { ModalContainer,
    NftForm,
    NftFormFirst,
    NftFormSecond,
    NftFileContainer,
    NftFormFileLabel,
    PlusIcon,
    NftFormFileInput,
    NftFormLabel,
    NftFormTextarea,
    NftFormInput,
    BtnWrapper } from "./AddNftModal.styled";
import { useEffect, useRef } from "react";
import { useEscapeKey } from "../../../hooks/useEscapeKey";
import { IconButton } from "../../BaseComponents/Buttons/IconButton";
import { Button } from "../../BaseComponents/Buttons/Button";
import { useState } from "react";
import {useForm} from '../../../hooks/useForm';

const initialState = {
    imageUrl: null,
    title: '',
    description: '',
    details: 
        {
            etherscan: '',
            original: ''
        },
    tags: '',
    price: ''
};

export const AddNftModal = ({modalOpen, toggleModal, onSubmit}) => {
    const ref = useRef();
    const [formPage, setFormPage] = useState(1);

    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

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

    // useEffect(() => {
    //     if (modalOpen) {
    //         document.body.style.overflow = 'hidden';
    //     };
    //     return () => document.body.style.overflow = 'unset';
    // }, [modalOpen]);

    const togglePage = () => {
        if (formPage === 1) {
            setFormPage(2);
        } else {
            setFormPage(1);
        };
    };

    return (
        <ModalContainer ref={ref}>
            <IconButton right='15px' iconType='close' type='button' onClick={toggleModal} />
                <NftForm onSubmit={handleSubmit}>
                {formPage === 1 && 
                    <NftFormFirst show={formPage === 1 ? true : false}>
                        <NftFileContainer>
                            <NftFormFileLabel><PlusIcon /><NftFormFileInput name='imageUrl' type='file' onChange={handleChange} /></NftFormFileLabel>
                        </NftFileContainer>
                        <NftFormLabel htmlFor="title">Title*</NftFormLabel>
                        <NftFormInput name='title' value={state.title} id='title' type='text' placeholder="Nft title?" onChange={handleChange} />
                        <Button type='button' content='Next' iconType='arrowr' fill='purple' hfill='white' w='25px' h='25px' mt='20px' onClick={togglePage} />
                    </NftFormFirst>
                }
                {formPage === 2 &&
                    <NftFormSecond>
                        <NftFormLabel htmlFor="description">Description</NftFormLabel>
                        <NftFormTextarea name='description' value={state.description} id='description' placeholder="What about?" onChange={handleChange} />
                        <NftFormLabel htmlFor='details'>Details</NftFormLabel>
                        <NftFormInput name='etherscan' id='details' value={state.details.etherscan} type='text' placeholder='Link to Etherscan?' onChange={handleChange} />
                        <NftFormInput name='original' id='details' value={state.details.original} type='text' placeholder='Link to Original?' onChange={handleChange} />
                        <NftFormLabel htmlFor="tags">Tags</NftFormLabel>
                        <NftFormInput name='tags' value={state.tags} id='tags' type='text' placeholder="Any tags?" onChange={handleChange} />
                        <NftFormLabel htmlFor="price">Price</NftFormLabel>
                        <NftFormInput name='price' value={state.price} id='price' type='text' placeholder="How mach?" onChange={handleChange} />
                        <BtnWrapper>
                            <Button type='button' content='Previous' iconType='arrowl' fill='purple' hfill='white' w='25px' h='25px' onClick={togglePage} />
                            <Button type='submit' iconType='done' fill='purple' hfill='white' w='25px' h='25px' content='Add' />
                        </BtnWrapper>
                    </NftFormSecond>
                }
            </NftForm>
        </ModalContainer>
    )
};
