import { useUsers } from "../../hooks";
import { IconButton } from "../BaseComponents/Buttons/IconButton";
import { NftsList } from "../NftsList/NftsList";
import {PaddingWrapper} from '../BaseComponents/PaddingWrapper/PaddingWrapper.styled'
import { Container, TopWrapper, Title, AuthorContainer, AuthorAvatar, AuthorName, BtnsWrapper } from "./Collection.styled";

export const Collection = ({deleteCollection, toggleModal, collectionDetails}) => {
    const {allUsers, user} = useUsers();

    const {title, author, nfts, _id} = collectionDetails;

    const authorData = allUsers.find(item => item._id === author);

    return (
        <Container>
            <PaddingWrapper>
                <TopWrapper>
                    <Title>{title} - NFT collection</Title>
                    {user._id === author && 
                        <BtnsWrapper>
                            <IconButton w='25px' h='25px' onClick={toggleModal} iconType='edit' position='static' />
                            <IconButton w='25px' h='25px' onClick={() => deleteCollection(_id)} iconType='delete' position='static' />
                        </BtnsWrapper>
                    }
                </TopWrapper>
                <AuthorContainer>
                    <AuthorAvatar src={authorData.avatarUrl} />
                    <AuthorName>{authorData.name}</AuthorName>
                </AuthorContainer>
                <NftsList nfts={nfts} />
            </PaddingWrapper>
        </Container>
    )
}