import { useInView } from 'react-intersection-observer';
import {
  ListItem,
  AuthorLink,
  AuthorRank,
  AuthorRankNumber,
  AuthorAvatar,
  Wrapper,
  AuthorName,
  AuthorValue,
  AuthorValueNumber,
} from './CreatorsList.styled';

export const CreatorsListItem = ({ item, index }) => {
  const { _id, name, avatarUrl, createdVolume } = item;
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <ListItem ref={ref} show={inView}>
      <AuthorLink to={`/profile/${_id}`}>
        <AuthorRank>
          <AuthorRankNumber>{index + 1}</AuthorRankNumber>
        </AuthorRank>
        <AuthorAvatar src={avatarUrl} />
        <Wrapper>
          <AuthorName>{name}</AuthorName>
          <AuthorValue>
            Total Created: <AuthorValueNumber>{createdVolume}</AuthorValueNumber>
          </AuthorValue>
        </Wrapper>
      </AuthorLink>
    </ListItem>
  );
};
