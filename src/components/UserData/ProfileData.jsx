import {
    Container, 
    CoverWrapper, 
    AvatarWrapper, 
    Avatar,
    InfoWrapper,
    UsernameBtnsWrapper,
    Username,
    InfoList,
    InfoListItem,
    InfoListItemNumber,
    InfoListItemText,
    DetailsWrapper,
    DetailsTitle,
    BioText,
    EditWrapper,
} from './UserData.styled';
import { useState } from 'react';
import { UserSocialList } from '../UserSocialList/UserSocialList';
import { useEffect } from 'react';
import { PaddingWrapper } from '../BaseComponents/PaddingWrapper/PaddingWrapper.styled';
import { useUsers } from '../../hooks';
import {ProfileNfts} from '../Nfts/ProfileNfts';
import { Button } from '../BaseComponents/Buttons/Button';
import { useDispatch } from 'react-redux';
import userOperations from '../../redux/user/userOperations';

export const ProfileData = () => {
    const dispatch = useDispatch();
    const {profile, user} = useUsers();
    const {name, bio, avatarUrl, socialLinks, followers, profileCover} = profile;
    const [show, setShow] = useState(false);

    const follow = user.iFollow.includes(profile._id);

    const followingToggle = () => {
        dispatch(userOperations.following(profile._id));
    };

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 1)
    }, [])

    return (
        <>
        <Container>
            <CoverWrapper background={profileCover} show={show} />
            <PaddingWrapper>
                <InfoWrapper show={show}>
                    <AvatarWrapper show={show}>
                        <Avatar src={avatarUrl}/>
                    </AvatarWrapper>
                    <UsernameBtnsWrapper>
                        <Username>{name}</Username>
                        <Button type='button' fill='accent' hfill='text' iconType={follow ? 'close' : 'plus'} w='25px' h='25px' content={follow ? 'Unfollow' : 'Follow'} onClick={followingToggle} />
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
                            <InfoListItemText>{followers.length === 1 ? 'Follower' : 'Followers'}</InfoListItemText>
                        </InfoListItem>
                    </InfoList>
                    <DetailsWrapper mt='30px' mb='30px'>
                        <EditWrapper>
                            <DetailsTitle>Bio</DetailsTitle>
                        </EditWrapper>
                        <BioText>{bio ? bio : 'No bio added yet...'}</BioText>
                    </DetailsWrapper>
                    <DetailsWrapper>
                        <EditWrapper>
                            <DetailsTitle>Links</DetailsTitle>
                        </EditWrapper>
                        <UserSocialList socialLinks={socialLinks} />
                    </DetailsWrapper>
                </InfoWrapper>
                <ProfileNfts />
            </PaddingWrapper>
        </Container>
        </>
    )
};
