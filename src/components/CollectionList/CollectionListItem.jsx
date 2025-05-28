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
  MainSceleton,
  OtherSceleton,
} from './CollectionList.styled';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const CollectionListItem = ({ item, index }) => {
  const { nfts, author, title, _id } = item;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <ListItem ref={ref} show={inView} i={index}>
      <NavLink to={`/nfts/collection/${_id}`}>
        {inView ? <MainImg src={nfts[0].imageUrl} /> : <MainSceleton />}
        <OtherWrapper>
          {inView ? <OtherImgs src={nfts[1].imageUrl} /> : <OtherSceleton />}
          {nfts.length > 2 && inView ? <OtherImgs src={nfts[2].imageUrl} /> : <OtherSceleton />}
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
