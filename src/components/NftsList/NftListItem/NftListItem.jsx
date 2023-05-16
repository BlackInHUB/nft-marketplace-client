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
    PriceValue,
    ImageSkeleton } from "./NftListItem.styled";
import {useUsers} from '../../../hooks/useUsers';
import { useInView } from "react-intersection-observer";

export const NftListItem = ({nft}) => {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    const {imageUrl, title, price, author, _id} = nft;
    const {allUsers} = useUsers();
    const user = allUsers.find(user => user._id === author);

    return (
        <NftItem ref={ref} show={inView}>
            <NftLink to={`/nft/${_id}`}>
                {inView ? <ImageWrapper imageUrl={imageUrl} /> : <ImageSkeleton />}
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