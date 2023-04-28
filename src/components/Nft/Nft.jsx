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
    ToArtistLink
} from "./Nft.styled";
import {ReactComponent as Globe} from '../../images/icons/Globe.svg';
import { useNfts, useMQ } from '../../hooks';
import {NftsList} from '../../components/NftsList/NftsList';
import {Button} from '../../components/BaseComponents/Buttons/Button';

const Nft = () => {
    const {nftDetails} = useNfts();
    const {allUsers} = useUsers();
    const {isTablet, isMobile} = useMQ();

    if (!nftDetails) {
        return;
    };

    const {author, imageUrl, createdAt, description, title, details, tags} = nftDetails.nft;

    const user = allUsers.find(user => user._id === author);

    const date = new Date(createdAt);
    const mintedOn = date.toLocaleString('en-GB', { month: 'short' }) + ' ' + date.getDate() + ', ' + date.getFullYear();

    const tagsToRender = tags.split(/[#," "]+/).filter(item => item !== '');

    return (
        <NftContainer>
            <NftImage imageUrl={imageUrl} />
            <PaddingWrapper>
                <InfoContainer>
                    <NftTitle>{title}</NftTitle>
                    <CreatedAt>Minted On {mintedOn}</CreatedAt>
                    <InfoTitle>Created by</InfoTitle>
                    <AuthorLink>
                        <AuthorAvatar src={user.avatarUrl} />
                        <AuthorName>{user.name}</AuthorName>
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
                <MoreContainer>
                    <MoreTopWrapper>
                        <MoreTitle>More from this artist</MoreTitle>
                        {!isMobile && <ToArtistLink to={`/profile/${author}`}><Button type='button' iconType='arrowr' fill='accent' hfill='text' content='Go To Artist Page' /></ToArtistLink>}
                    </MoreTopWrapper>
                    <NftsList nfts={isMobile ? nftDetails.moreFromAuthor.slice(0, 2) : isTablet ? nftDetails.moreFromAuthor.slice(0, 4) : nftDetails.moreFromAuthor.slice(0, 6)} />
                    {isMobile && <LinkWrapper><ToArtistLink to='/'><Button type='button' iconType='arrowr' fill='accent' hfill='text' content='Go To Artist Page' /></ToArtistLink></LinkWrapper>}
                </MoreContainer>
            </PaddingWrapper>
        </NftContainer>
    )
};

export default Nft;