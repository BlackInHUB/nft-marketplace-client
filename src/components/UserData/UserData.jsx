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
    SocialList,
    SocialListItem,
    FileInputLabel,
    FileInput,
    EditIcon,
    EditWrapper
} from './UserData.styled';
import { Button, IconButton } from '../BaseComponents/Buttons/Buttons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import userOperations from '../../redux/user/userOperations';


export const UserData = ({user}) => {
    const {name, bio, avatarUrl, socialLinks, followers, profileCover, owned} = user;
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch();

    const handleEditorOpen = () => {
        setEdit(!edit);
    };

    const handleImageEdit = (e) => {
        const newImage = new FormData();

        newImage.append(e.target.name, e.target.files[0]);

        dispatch(userOperations.update(newImage))
    };

    return (
        <Container>
            <CoverWrapper background={profileCover}>
                {edit && <FileInputLabel><EditIcon /><FileInput name='profileCover' type='file' onChange={handleImageEdit}/></FileInputLabel>}
            </CoverWrapper>
            <InfoWrapper>
                <AvatarWrapper>
                    <Avatar src={avatarUrl}/>
                    {edit && <FileInputLabel><EditIcon /><FileInput name='avatarUrl' type='file' onChange={handleImageEdit}/></FileInputLabel>}
                </AvatarWrapper>
                <UsernameBtnsWrapper>
                    <EditWrapper>
                        <Username>{name}</Username>
                        {edit && <IconButton iconType='edit' position='static' ml='10px'/>}
                    </EditWrapper>
                    <Button type={'button'} iconType={'plus'} content={'Add NFT'}/>
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
                    <EditWrapper>
                        <DetailsTitle>Bio</DetailsTitle>
                        {edit && <IconButton iconType='edit' position='static' ml='10px'/>}
                    </EditWrapper>
                    <BioText>{bio}</BioText>
                </DetailsWrapper>
                <DetailsWrapper>
                    <EditWrapper>
                        <DetailsTitle>Links</DetailsTitle>
                        {edit && <IconButton iconType='edit' position='static' ml='10px' />}
                    </EditWrapper>
                    <SocialList>
                        <SocialListItem></SocialListItem>
                    </SocialList>
                </DetailsWrapper>
                <Button 
                    type='button' 
                    iconType={edit ? 'close' : 'edit'} 
                    borderColor='transparent' 
                    content={edit ? 'Close editor' : 'Edit profile'} 
                    pr='0' 
                    pl='0'
                    onClick={handleEditorOpen}
                />
            </InfoWrapper>
        </Container>
    )
};
