import {
  ListItem,
  MainImg,
  OtherWrapper,
  OtherImgs,
  ImgsCounter,
  Counter,
  Title,
  Author,
  AuthorAvatar,
  AuthorName,
} from './CollectionList.styled';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const CollectionListItem = ({ item, index }) => {
  const { nfts, author, title, _id } = item;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <ListItem ref={ref} show={inView} i={index}>
      <NavLink to={`/nfts/collection/${_id}`}>
        {/* {inView ? <MainImg src={nfts[0].imageUrl} /> : <MainSceleton />} */}
        <MainImg src={nfts[0].imageUrl} />
        <OtherWrapper>
          {/* {inView ? <OtherImgs src={nfts[1].imageUrl} /> : <OtherSceleton />} */}
          {/* {nfts.length > 2 && inView ? <OtherImgs src={nfts[2].imageUrl} /> : <OtherSceleton />} */}
          {nfts.slice(1, 3).map(nft => (
            <OtherImgs src={nft.imageUrl} key={nft._id} alt={nft.title} />
          ))}
          <ImgsCounter>
            <Counter>{nfts.length}+</Counter>
          </ImgsCounter>
        </OtherWrapper>
        <Title>{title}</Title>
        <Author>
          <AuthorAvatar src={author.avatarUrl} />
          <AuthorName>{author.name}</AuthorName>
        </Author>
      </NavLink>
    </ListItem>
  );
};
