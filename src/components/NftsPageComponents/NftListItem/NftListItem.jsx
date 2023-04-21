import { NftItem,
    ImageWrapper,
    InfoWrapper,
    Title,
    AuthorLink,
    Avatar,
    Author,
    PricesWrapper,
    PriceWrapper,
    PriceTitle,
    PriceValue } from "./NftListItem.styled";
    import {useUsers} from '../../../hooks/useUsers';

export const NftListItem = ({nft}) => {
    const {imageUrl, title, price, author} = nft;
    const {allUsers} = useUsers();

    const user = allUsers.find(user => user._id === author);

    return (
        <NftItem>
            <ImageWrapper imageUrl={imageUrl} />
            <InfoWrapper>
                <Title>{title}</Title>
                <AuthorLink>
                    <Avatar src={user.avatarUrl} />
                    <Author>{user.name}</Author>
                </AuthorLink>
                <PricesWrapper>
                    <PriceWrapper>
                        <PriceTitle>Price</PriceTitle>
                        <PriceValue>{price}</PriceValue>
                    </PriceWrapper>
                    <PriceWrapper>
                        <PriceTitle>Highest Bid</PriceTitle>
                        <PriceValue>{price}</PriceValue>
                    </PriceWrapper>
                </PricesWrapper>
            </InfoWrapper>
        </NftItem>
    )
};