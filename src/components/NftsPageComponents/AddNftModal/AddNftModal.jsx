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
    BtnWrapper, 
    InputWrapper,
    ModalBackdrop} from "./AddNftModal.styled";
import { useEffect, useRef } from "react";
import { useEscapeKey } from "../../../hooks/useEscapeKey";
import { IconButton } from "../../BaseComponents/Buttons/IconButton";
import { Button } from "../../BaseComponents/Buttons/Button";
import { useState } from "react";
import {useForm} from '../../../hooks/useForm';
import { useMQ } from "../../../hooks/useMQ";

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

export const AddNftModal = ({modalOpen, toggleModal, onSubmit, show}) => {
    const ref = useRef();
    const [formPage, setFormPage] = useState(1);
    const [pageShow, setPageShow] = useState(1);
    const {isMobile} = useMQ();

    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
    const {title, imageUrl, description, details, tags, price} = state;

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

    const togglePage = () => {
        if (formPage === 1) {
            setPageShow(0)
            setTimeout(() => {
                setFormPage(2);
                setTimeout(() => {
                    setPageShow(2)
                }, 100);
            }, 250)
        } else {
            setPageShow(0)
            setTimeout(() => {
                setFormPage(1);
                setTimeout(() => {
                    setPageShow(1)
                }, 100)
            }, 250)
        };
    };

    const previewUrl = imageUrl ? URL.createObjectURL(state.imageUrl[0]) : null;

    return (
        <ModalBackdrop>
            <ModalContainer show={show} ref={ref}>
                <IconButton right='15px' iconType='close' type='button' onClick={toggleModal} />
                    <NftForm onSubmit={handleSubmit}>
                    {formPage === 1 && 
                        <NftFormFirst show={pageShow}>
                            <InputWrapper>
                                <NftFileContainer preview={previewUrl}>
                                    <NftFormFileLabel><PlusIcon /><NftFormFileInput name='imageUrl' type='file' onChange={handleChange} /></NftFormFileLabel>
                                </NftFileContainer>
                                <NftFormLabel htmlFor="title">Title*</NftFormLabel>
                                <NftFormInput name='title' value={title} id='title' type='text' placeholder="Nft title?" onChange={handleChange} />
                                {isMobile && 
                                    <InputWrapper>
                                        <NftFormLabel htmlFor="description">Description</NftFormLabel>
                                        <NftFormTextarea name='description' value={description} id='description' placeholder="What about?" onChange={handleChange} />
                                    </InputWrapper>
                                }
                            </InputWrapper>
                            <Button type='button' content='Next' iconType='arrowr' fill='accent' hfill='text' w='25px' h='25px' mt='20px' onClick={togglePage} />
                        </NftFormFirst>
                    }
                    {formPage === 2 &&
                        <NftFormSecond show={pageShow}>
                            <InputWrapper>
                                {!isMobile && 
                                    <InputWrapper>
                                        <NftFormLabel htmlFor="description">Description</NftFormLabel>
                                        <NftFormTextarea name='description' value={description} id='description' placeholder="What about?" onChange={handleChange} />
                                    </InputWrapper>
                                }
                                <NftFormLabel htmlFor='details'>Details</NftFormLabel>
                                <InputWrapper>
                                    <NftFormInput name='etherscan' id='details' value={details.etherscan} type='text' placeholder='Link to Etherscan?' onChange={handleChange} mb='10px' />
                                    <NftFormInput name='original' id='details' value={details.original} type='text' placeholder='Link to Original?' onChange={handleChange} />
                                </InputWrapper>
                                <NftFormLabel htmlFor="tags">Tags</NftFormLabel>
                                <NftFormInput name='tags' value={tags} id='tags' type='text' placeholder="Any tags?" onChange={handleChange} />
                                <NftFormLabel htmlFor="price">Price</NftFormLabel>
                                <NftFormInput name='price' value={price} id='price' type='text' placeholder="How mach?" onChange={handleChange} />
                            </InputWrapper>
                            <BtnWrapper>
                                <Button type='button' content='Previous' iconType='arrowl' fill='accent' hfill='text' w='25px' h='25px' onClick={togglePage} />
                                <Button type='submit' iconType='done' fill='accent' hfill='text' w='25px' h='25px' content='Add' />
                            </BtnWrapper>
                        </NftFormSecond>
                    }
                </NftForm>
            </ModalContainer>
        </ModalBackdrop>
    )
};
