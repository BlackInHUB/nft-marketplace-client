import {
    Container, 
    CoverWrapper, 
    Cover,
    AvatarWrapper, 
    Avatar,
    BtnsWrapper,
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
    SocialListItem    
} from './UserData.styled';

export const UserData = ({user}) => {

    return (
        <Container>
            <CoverWrapper>
                <Cover />
            </CoverWrapper>
            <InfoWrapper>
                <AvatarWrapper>
                    <Avatar />
                </AvatarWrapper>
                <UsernameBtnsWrapper>
                    <Username></Username>
                    <BtnsWrapper>
                        
                    </BtnsWrapper>
                </UsernameBtnsWrapper>
                <InfoList>
                    <InfoListItem>
                        <InfoListItemNumber></InfoListItemNumber>
                        <InfoListItemText></InfoListItemText>
                    </InfoListItem>
                    <InfoListItem>
                        <InfoListItemNumber></InfoListItemNumber>
                        <InfoListItemText></InfoListItemText>
                    </InfoListItem>
                    <InfoListItem>
                        <InfoListItemNumber></InfoListItemNumber>
                        <InfoListItemText></InfoListItemText>
                    </InfoListItem>
                </InfoList>
                <DetailsWrapper>
                    <DetailsTitle>Bio</DetailsTitle>
                    <BioText></BioText>
                </DetailsWrapper>
                <DetailsWrapper>
                    <DetailsTitle>Links</DetailsTitle>
                    <SocialList>
                        <SocialListItem></SocialListItem>
                    </SocialList>
                </DetailsWrapper>
            </InfoWrapper>
        </Container>
    )
};
