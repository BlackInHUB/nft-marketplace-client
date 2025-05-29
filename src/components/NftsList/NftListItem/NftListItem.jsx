import {
  NftItem,
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
} from './NftListItem.styled';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUsers } from '../../../hooks';

export const NftListItem = ({ nft, index, bgColor }) => {
  const { isLoggedIn } = useUsers();
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const toNftPage = () => {
    if (!isLoggedIn) {
      return toast.error('You need Log In to see details!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

    navigate(`/nft/${_id}`);
  };

  const { imageUrl, title, price, author, _id } = nft;

  return (
    <NftItem ref={ref} show={inView} onClick={toNftPage} i={index} bgColor={bgColor}>
      {/* <NftLink to={`/nft/${_id}`}> */}
      {/* {inView ? <ImageWrapper imageUrl={imageUrl} /> : <ImageSkeleton />}*/}
      <ImageWrapper src={imageUrl} alt={title} />
      <InfoWrapper>
        <Title>{title}</Title>
        <AuthorContainer>
          <Avatar src={author.avatarUrl} />
          <Author>{author.name}</Author>
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
      {/* </NftLink> */}
    </NftItem>
  );
};
