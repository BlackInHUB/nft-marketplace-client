import {
    Container, 
    CoverWrapper, 
    AvatarWrapper, 
    Avatar,
    UsernameBtnsWrapper,
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
import { FieldEditForm } from '../FieldEditForm/FieldEditForm';
import { UserSocialList } from '../UserSocialList/UserSocialList';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { EditorBtn } from '../EditorBtn/EditorBtn';
import {useMQ} from '../../hooks/useMQ';

export const UserData = ({user}) => {
    const {name, bio, avatarUrl, socialLinks, followers, profileCover} = user;
    const [edit, setEdit] = useState(false);
    const [edField, setEdField] = useState(null);
    const [addLink, setAddLink] = useState(false);
    const [show, setShow] = useState(false);
    const {isTablet, isDesktop} = useMQ();
    const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 1)
    }, [])

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

    const handleEditSubmit = (newData) => {
        setEdField(null);
        dispatch(userOperations.update(newData));
    };

    const toggleAddLink = () => {
        setAddLink(!addLink);
    };

    const toggleEdit = () => {
        if (addLink) {
            setAddLink(false);
        };
        setEdField(null);
        setEdit(!edit);
    };

    return (
        <>
        <Container>
            <CoverWrapper background={profileCover} show={show}>
                {edit && <FileInputLabel><EditIcon /><FileInput name='profileCover' type='file' onChange={handleImageEdit}/></FileInputLabel>}
                <EditorBtn onClick={toggleEdit} text={edit ? 'Close editor' : 'Edit profile'} iconType={edit ? 'close' : 'edit'} bottom='15px' right='30px' />
            </CoverWrapper>
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
                    <NavLink to='/nfts'><Button type='button' fill='accent' hfill='text' iconType='arrowr' w='25px' h='25px' content={'My NFTs'} /></NavLink>
                </UsernameBtnsWrapper>
                <InfoList>
                    <InfoListItem>
                        <InfoListItemNumber>0</InfoListItemNumber>
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
        </Container>
        </>
    )
};
