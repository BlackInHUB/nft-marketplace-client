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
import { useOutletContext } from 'react-router-dom';

export const UserData = ({user}) => {
    const {name, bio, avatarUrl, socialLinks, followers, profileCover, owned} = user;
    const [edField, setEdField] = useState(null);
    const [addLink, setAddLink] = useState(false);
    const dispatch = useDispatch();
    const defaultAvatar = 'https://res.cloudinary.com/dazfphdfk/image/upload/v1681052126/avatarUrl/4ccba907-94f4-497e-b412-ff20f6ca05cb-no-avatar.png';
    const {edit, setEdit} = useOutletContext();

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
                        {(edit && !edField) && <IconButton type='button' fill='white' iconType='edit' position='static' ml='10px' onClick={() => toggleEditField('name')}/>}
                    </EditWrapper>
                    {edit ? 
                        <Button 
                        type='button' 
                        iconType='close'
                        content='Close editor'
                        w='25px'
                        h='25px'
                        onClick={() => setEdit(!edit)}
                        /> :
                        <Button type='button' iconType='plus' w='25px' h='25px' content={'Add NFT'} />
                    }
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
                        {(edit && !edField) && <IconButton type='button' fill='white' iconType='edit' position='static' ml='10px' onClick={() => toggleEditField('bio')}/>}
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
                                <IconButton type='button' iconType='plus' fill='white' w='25px' h='25px' position='static' onClick={toggleAddLink} />
                                <IconButton type='button' iconType='close' fill='white' position='static' onClick={() => toggleEditField(null)} ml='10px' />
                            </BtnsWrapper>
                        }
                        {(edit && !edField) && <IconButton type='button' fill='white' iconType='edit' position='static' ml='10px' onClick={() => toggleEditField('socialLinks')}/>}
                    </EditWrapper>
                    <UserSocialList socialLinks={socialLinks} editing={edField === 'socialLinks'} addLink={addLink} setAddLink={setAddLink} />
                </DetailsWrapper>
            </InfoWrapper>
        </Container>
    )
};
