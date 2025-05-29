import { useUsers } from '../../hooks';
import { IconButton } from '../BaseComponents/Buttons/IconButton';
import { NftsList } from '../NftsList/NftsList';
import {
  TopWrapper,
  Title,
  AuthorContainer,
  AuthorAvatar,
  AuthorName,
  BtnsWrapper,
} from './Collection.styled';
import { SectionWrapper, PaddingWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';

export const Collection = ({ deleteCollection, toggleModal, collectionDetails }) => {
  const { user } = useUsers();
  const { title, author, nfts, _id } = collectionDetails;

  return (
    <SectionWrapper>
      <PaddingWrapper>
        <TopWrapper>
          <Title>{title} - NFT collection</Title>
          {user && user._id === author._id && (
            <BtnsWrapper>
              <IconButton
                w="25px"
                h="25px"
                onClick={toggleModal}
                iconType="edit"
                position="static"
              />
              <IconButton
                w="25px"
                h="25px"
                onClick={() => deleteCollection(_id)}
                iconType="delete"
                position="static"
              />
            </BtnsWrapper>
          )}
        </TopWrapper>
        <AuthorContainer>
          <AuthorAvatar src={author.avatarUrl} />
          <AuthorName>{author.name}</AuthorName>
        </AuthorContainer>
        <NftsList nfts={nfts} />
      </PaddingWrapper>
    </SectionWrapper>
  );
};
