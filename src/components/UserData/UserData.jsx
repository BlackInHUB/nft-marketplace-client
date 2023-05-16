import {
    Container, 
    CoverWrapper, 
    AvatarWrapper, 
    Avatar,
    UsernameBtnsWrapper,
    MainBtnsWrapper,
    InfoWrapper,
    Username,
    InfoList,
    InfoListItem,
    InfoListItemNumber,
    InfoListItemText,
    DetailsWrapper,
    DetailsTitle,
    BioText,
    FileInputLabel,
    FileInput,
    EditIcon,
    EditWrapper,
    BtnsWrapper
} from './UserData.styled';
import { Button } from '../BaseComponents/Buttons/Button';
import {IconButton} from '../BaseComponents/Buttons/IconButton';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import userOperations from '../../redux/user/userOperations';
import nftOperations from '../../redux/nft/nftOperations';
import { FieldEditForm } from '../FieldEditForm/FieldEditForm';
import { UserSocialList } from '../UserSocialList/UserSocialList';
import { useEffect } from 'react';
import {useMQ} from '../../hooks/useMQ';
import { PaddingWrapper } from '../BaseComponents/PaddingWrapper/PaddingWrapper.styled';
import { UserNfts } from '../Nfts/UserNfts';
import { NftModal } from "../NftModal/NftModal";
import { CollectionModal } from '../CollectionModal/CollectionModal';
import { createPortal } from "react-dom";
import {EditorBtn} from '../EditorBtn/EditorBtn';
import { useNfts, useUsers } from '../../hooks';

export const UserData = () => {
    const {user} = useUsers();
    const {usersNft} = useNfts();
    const [edit, setEdit] = useState(false);
    const [edField, setEdField] = useState(null);
    const [addLink, setAddLink] = useState(false);
    const [show, setShow] = useState(false);
    const [addOpen, setAddOpen] = useState(false);
    const [collectionOpen, setCollectionOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const {isTablet, isDesktop} = useMQ();
    const dispatch = useDispatch();

    const getVolume = (nfts) => {
        const sum = nfts.reduce((acc, nft) => acc + parseInt(nft.price), 0);

        if (sum < 1000) {
            return sum;
        };

        return sum / 1000 + 'k+'
    };

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 1)
    }, []);

    if (!user || !usersNft) {
        return;
    };

    const {name, bio, avatarUrl, socialLinks, followers, profileCover} = user;
    const {created} = usersNft;

    const toggleEdit = () => {
        if (addLink) {
            setAddLink(false);
        };
        setEdField(null);
        setEdit(!edit);
    };

    const toggleEditField = (field) => {
        if (addLink) {
            setAddLink(!addLink);
        };
        setEdField(field);
    };

    const handleImageEdit = (e) => {
        const newImage = new FormData();

        newImage.append(e.target.name, e.target.files[0]);

        dispatch(userOperations.update(newImage))
    };

    const toggleAddLink = () => {
        setAddLink(!addLink);
    };

    const handleEditSubmit = (newData) => {
        setEdField(null);
        dispatch(userOperations.update(newData));
    };

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
        toggleAddOpen();
    };

    const toggleAddOpen = () => {
        if (addOpen) {
            setTimeout(() => {
                setAddOpen(!addOpen);
            }, 500);
            setModalShow(!modalShow)
            return;
        }
        setAddOpen(!addOpen);
        setTimeout(() => {
            setModalShow(!modalShow);
        }, 1);
    };

    const toggleCollectionOpen = () => {
        if (collectionOpen) {
            setTimeout(() => {
                setCollectionOpen(!collectionOpen);
            }, 500);
            setModalShow(!modalShow)
            return;
        }
        setCollectionOpen(!collectionOpen);
        setTimeout(() => {
            setModalShow(!modalShow);
        }, 1);
    };

    const addCollectionSubmit = (collection) => {
        dispatch(nftOperations.createCollection(collection));
    };

    const collectionInitialState = {
        title: '',
        nfts: []
    };

    const addModalIinitialState = {
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

    return (
        <>
        <Container>
            <CoverWrapper background={profileCover} show={show}>
                {edit && <FileInputLabel><EditIcon /><FileInput name='profileCover' type='file' onChange={handleImageEdit}/></FileInputLabel>}
                <EditorBtn onClick={toggleEdit} text={edit ? 'Close editor' : 'Edit profile'} iconType={edit ? 'close' : 'edit'} bottom='15px' right={isDesktop ? '115px' : isTablet ? '72px' : '30px'} />
            </CoverWrapper>
            <PaddingWrapper>
                <InfoWrapper show={show}>
                    <AvatarWrapper show={show}>
                        <Avatar src={avatarUrl}/>
                        {edit && <FileInputLabel><EditIcon /><FileInput name='avatarUrl' type='file' onChange={handleImageEdit}/></FileInputLabel>}
                    </AvatarWrapper>
                    <UsernameBtnsWrapper>
                        <EditWrapper mb='30px'>
                            {edField !== 'name' ?
                                <Username>{name}</Username> :
                                <FieldEditForm name='name' value={name} onSubmit={handleEditSubmit} onClose={toggleEditField} />
                            }
                            {(edit && !edField) && <IconButton type='button' iconType='edit' position='static' ml='10px' onClick={() => toggleEditField('name')}/>}
                        </EditWrapper>
                        <MainBtnsWrapper>
                            <Button type='button' iconType='plus' fill='accent' hfill='text' w='25px' h='25px' content='Add NFT' onClick={toggleAddOpen} />
                            <Button type='button' iconType='copy' fill='accent' hfill='text' w='25px' h='25px' content='Create Collection' onClick={toggleCollectionOpen} />
                        </MainBtnsWrapper>
                        {/* <Button type='button' fill='accent' hfill='text' iconType={edit ? 'close' : 'edit'} w='25px' h='25px' content={edit ? 'Close Editor' : 'Edit Profile'} onClick={toggleEdit} /> */}
                    </UsernameBtnsWrapper>
                    <InfoList>
                        <InfoListItem>
                            <InfoListItemNumber>{getVolume(created)}</InfoListItemNumber>
                            <InfoListItemText>Volume</InfoListItemText>
                        </InfoListItem>
                        <InfoListItem>
                            <InfoListItemNumber>0</InfoListItemNumber>
                            <InfoListItemText>NFTs sold</InfoListItemText>
                        </InfoListItem>
                        <InfoListItem>
                            <InfoListItemNumber>{followers ? followers.length : 0}</InfoListItemNumber>
                            <InfoListItemText>Followers</InfoListItemText>
                        </InfoListItem>
                    </InfoList>
                    <DetailsWrapper mt='30px' mb='30px'>
                        <EditWrapper>
                            <DetailsTitle>Bio</DetailsTitle>
                            {(edit && !edField) && <IconButton type='button' iconType='edit' position='static' ml='10px' onClick={() => toggleEditField('bio')}/>}
                        </EditWrapper>
                        {edField !== 'bio' ?
                            <BioText>{bio ? bio : 'No bio added yet...'}</BioText> :
                            <FieldEditForm name='bio' value={bio} onSubmit={handleEditSubmit} onClose={toggleEditField} />
                        }
                    </DetailsWrapper>
                    <DetailsWrapper>
                        <EditWrapper>
                            <DetailsTitle>Links</DetailsTitle>
                            {edField === 'socialLinks' &&
                                <BtnsWrapper>
                                    <IconButton type='button' iconType='plus' w='25px' h='25px' position='static' onClick={toggleAddLink} />
                                    <IconButton type='button' iconType='close' position='static' onClick={() => toggleEditField(null)} ml='10px' />
                                </BtnsWrapper>
                            }
                            {(edit && !edField) && <IconButton type='button' iconType='edit' position='static' ml='10px' onClick={() => toggleEditField('socialLinks')}/>}
                        </EditWrapper>
                        <UserSocialList socialLinks={socialLinks} editing={edField === 'socialLinks'} addLink={addLink} setAddLink={setAddLink} />
                    </DetailsWrapper>
                </InfoWrapper>
            </PaddingWrapper>
            <UserNfts />
        </Container>
        {addOpen &&
            createPortal(
                <NftModal type='add' initialState={addModalIinitialState} modalOpen={addOpen} toggleModal={toggleAddOpen} show={modalShow} onSubmit={handleNftAdd} sumbitText='Add NFT' />,
                document.querySelector('#modal-root')
            )
        }
        {collectionOpen &&
            createPortal(
                <CollectionModal title='Create new Collection' btnText='Create Collection' initialState={collectionInitialState} onSubmit={addCollectionSubmit} modalOpen={collectionOpen} toggleModal={toggleCollectionOpen} show={modalShow} />,
                document.querySelector('#modal-root')
            )
        }
        </>
    )
};