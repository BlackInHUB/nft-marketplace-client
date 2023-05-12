import { NftItem,
    NftLink,
    ImageWrapper,
    InfoWrapper,
    Title,
    AuthorContainer,
    Avatar,
    Author,
    PricesWrapper,
    PriceWrapper,
    PriceTitle,
    PriceValue } from "./NftListItem.styled";
import {useUsers} from '../../../hooks/useUsers';

export const NftListItem = ({nft}) => {
    const {imageUrl, title, price, author, _id} = nft;
    const {allUsers} = useUsers();

    const user = allUsers.find(user => user._id === author);

    return (
        <NftItem>
            <NftLink to={`/nft/${_id}`}>
                <ImageWrapper imageUrl={imageUrl} />
                <InfoWrapper>
                    <Title>{title}</Title>
                    <AuthorContainer>
                        <Avatar src={user.avatarUrl} />
                        <Author>{user.name}</Author>
                    </AuthorContainer>
                    <PricesWrapper>
                        <PriceWrapper>
                            <PriceTitle>Price</PriceTitle>
                            <PriceValue>{price} ETH</PriceValue>
                        </PriceWrapper>
                        <PriceWrapper>
                            <PriceTitle>Highest Bid</PriceTitle>
                            <PriceValue>{price} wETH</PriceValue>
                        </PriceWrapper>
                    </PricesWrapper>
                </InfoWrapper>
            </NftLink>
        </NftItem>
    )
};