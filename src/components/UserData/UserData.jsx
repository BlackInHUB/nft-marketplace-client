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
    EditBtnWrapper,
    AddLinkWrapper,
    BtnsWrapper
} from './UserData.styled';
import { Button, IconButton } from '../BaseComponents/Buttons/Buttons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import userOperations from '../../redux/user/userOperations';
import { FieldEditForm } from './FieldEditForm/FieldEditForm';
import { SocialList } from '../SocialList/SocialList';

export const UserData = ({user}) => {
    const {name, bio, avatarUrl, socialLinks, followers, profileCover, owned} = user;
    const [edit, setEdit] = useState(false);
    const [edField, setEdField] = useState(null);
    const [addLink, setAddLink] = useState(false);
    const dispatch = useDispatch();
    const defaultAvatar = 'https://res.cloudinary.com/dazfphdfk/image/upload/v1681052126/avatarUrl/4ccba907-94f4-497e-b412-ff20f6ca05cb-no-avatar.png';

    const handleEditorOpen = () => {
        if (edField) {
            setEdField(null);
        };
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

    const handleEditSubmit = (newData) => {
        setEdField(null);
        dispatch(userOperations.update(newData));
    };

    const toggleAddLink = () => {
        setAddLink(!addLink);
    };

    console.log(edit)

    return (
        <Container>
            <CoverWrapper background={profileCover}>
                {edit && <FileInputLabel><EditIcon /><FileInput name='profileCover' type='file' onChange={handleImageEdit}/></FileInputLabel>}
            </CoverWrapper>
            <InfoWrapper>
                <AvatarWrapper>
                    <Avatar src={avatarUrl ? avatarUrl : defaultAvatar}/>
                    {edit && <FileInputLabel><EditIcon /><FileInput name='avatarUrl' type='file' onChange={handleImageEdit}/></FileInputLabel>}
                </AvatarWrapper>
                <UsernameBtnsWrapper>
                    <EditWrapper mb='30px'>
                        {edField !== 'name' ?
                            <Username>{name}</Username> :
                            <FieldEditForm name='name' value={name} onSubmit={handleEditSubmit} onClose={toggleEditField} />
                        }
                        {(edit && !edField) && <IconButton type='button' w='20' h='20' iconType='edit' position='static' ml='10px' onClick={() => toggleEditField('name')}/>}
                    </EditWrapper>
                    <Button type='button' iconType='plus' content={'Add NFT'}/>
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
                <DetailsWrapper>
                    <EditWrapper mb='10px'>
                        <DetailsTitle>Bio</DetailsTitle>
                        {(edit && !edField) && <IconButton type='button' w='20' h='20' iconType='edit' position='static' ml='10px' onClick={() => toggleEditField('bio')}/>}
                    </EditWrapper>
                    {edField !== 'bio' ?
                        <BioText>{bio ? bio : 'No bio added yet...'}</BioText> :
                        <FieldEditForm name='bio' value={bio} onSubmit={handleEditSubmit} onClose={toggleEditField} />
                    }
                </DetailsWrapper>
                <DetailsWrapper>
                    <EditWrapper mb='10px'>
                        <DetailsTitle>Links</DetailsTitle>
                        {edField === 'socialLinks' &&
                            <BtnsWrapper>
                                <IconButton type='button' iconType='plus' w='30' h='30' position='static' iconColor='white' onClick={toggleAddLink} />
                                <IconButton type='button' iconType='close' w='20' h='20' position='static' iconColor='white' onClick={() => toggleEditField(null)} ml='10px' />
                            </BtnsWrapper>
                        }
                        {(edit && !edField) && <IconButton type='button' w='20' h='20' iconType='edit' position='static' ml='10px' onClick={() => toggleEditField('socialLinks')}/>}
                    </EditWrapper>
                    {edField !== 'socialLinks' ?
                        (socialLinks.length > 0 ? <SocialList socialLinks={socialLinks} /> : <BioText>No links added yet...</BioText>) :
                        <AddLinkWrapper>
                            {addLink && <FieldEditForm name='socialLinks' onClose={toggleAddLink} />}
                        </AddLinkWrapper>
                    }
                </DetailsWrapper>
                <EditBtnWrapper>
                    <Button 
                        type='button' 
                        iconType={edit ? 'close' : 'edit'} 
                        borderColor='transparent' 
                        content={edit ? 'Close editor' : 'Edit profile'} 
                        pr='0' 
                        pl='0'
                        pt='0'
                        pb='0'
                        onClick={handleEditorOpen}
                    />
                </EditBtnWrapper>
            </InfoWrapper>
        </Container>
    )
};
