import {useUsers} from '../../hooks/useUsers';
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import {
    NftContainer,
    NftImage,
    InfoContainer,
    NftTitle,
    CreatedAt,
    InfoTitle,
    AuthorLink,
    AuthorName,
    AuthorAvatar,
    NftDescription,
    DetailsList,
    DetailsListItem,
    DetailsLink,
    LinkIcon,
    TagsList,
    TagsListItem,
    MoreContainer,
    MoreTitle,
    MoreTopWrapper,
    LinkWrapper,
    ToArtistLink,
    TopWrapper,
    BtnsWrapper
} from "./Nft.styled";
import {ReactComponent as Globe} from '../../images/icons/Globe.svg';
import { useMQ } from '../../hooks';
import {NftsList} from '../../components/NftsList/NftsList';
import {Button} from '../../components/BaseComponents/Buttons/Button';
import { IconButton } from '../BaseComponents/Buttons/IconButton';

const Nft = ({nftDetails, toggleEditOpen, deleteNft}) => {
    const {user} = useUsers();
    const {isTablet, isMobile} = useMQ();

    const {author, imageUrl, createdAt, description, title, details, tags, _id} = nftDetails.nft;

    const date = new Date(createdAt);
    const mintedOn = date.toLocaleString('en-GB', { month: 'short' }) + ' ' + date.getDate() + ', ' + date.getFullYear();

    const tagsToRender = tags.split(/[#," "]+/).filter(item => item !== '');

    return (
        <>
            <NftContainer>
                <NftImage imageUrl={imageUrl} />
                <PaddingWrapper>
                    <InfoContainer>
                        <TopWrapper>
                            <NftTitle>{title}</NftTitle>
                            <BtnsWrapper>
                                <IconButton w='25px' h='25px' onClick={toggleEditOpen} iconType='edit' position='static' />
                                <IconButton w='25px' h='25px' onClick={() => deleteNft(_id)} iconType='delete' position='static' />
                            </BtnsWrapper>
                        </TopWrapper>
                        <CreatedAt>Minted On {mintedOn}</CreatedAt>
                        <InfoTitle>Created by</InfoTitle>
                        <AuthorLink>
                            <AuthorAvatar src={author.avatarUrl} />
                            <AuthorName>{author.name}</AuthorName>
                        </AuthorLink>
                        <InfoTitle>Description</InfoTitle>
                        <NftDescription>{description}</NftDescription>
                        <InfoTitle>Details</InfoTitle>
                        <DetailsList>
                            <DetailsListItem>
                                <DetailsLink href={details.etherscan}><LinkIcon as={Globe}/>View on Etherscan</DetailsLink>
                            </DetailsListItem>
                            <DetailsListItem>
                                <DetailsLink href={details.original}><LinkIcon as={Globe} />View Original</DetailsLink>
                            </DetailsListItem>
                        </DetailsList>
                        <InfoTitle>Tags</InfoTitle>
                        <TagsList>
                            {tagsToRender.map(tag => <TagsListItem key={tag}>{tag.toUpperCase()}</TagsListItem>)}
                        </TagsList>
                    </InfoContainer>
                </PaddingWrapper>
            </NftContainer>
            <MoreContainer>
                <PaddingWrapper>
                    <MoreTopWrapper>
                        <MoreTitle>More from this artist</MoreTitle>
                        {!isMobile && user._id !== author && <ToArtistLink to={`/profile/${author._id}`}><Button type='button' iconType='arrowr' fill='accent' hfill='text' content='Go To Artist Page' /></ToArtistLink>}
                    </MoreTopWrapper>
                        <NftsList nfts={isMobile ? nftDetails.moreFromAuthor.slice(0, 2) : isTablet ? nftDetails.moreFromAuthor.slice(0, 4) : nftDetails.moreFromAuthor.slice(0, 6)} />
                    {isMobile && user._id !== author &&  <LinkWrapper><ToArtistLink to={`/profile/${author._id}`}><Button type='button' iconType='arrowr' fill='accent' hfill='text' content='Go To Artist Page' mt='30px' /></ToArtistLink></LinkWrapper>}
                </PaddingWrapper>
            </MoreContainer>
        </>
    )
};

export default Nft;