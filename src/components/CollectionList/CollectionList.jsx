import { List, NoInfo } from './CollectionList.styled';
import { CollectionListItem } from './CollectionListItem';

export const CollectionList = ({ collections }) => {
  return (
    <>
      {collections.length > 0 ? (
        <List>
          {collections.map((item, i) => (
            <CollectionListItem key={item._id} item={item} index={i} />
          ))}
        </List>
      ) : (
        <NoInfo>We have nothing here, yet..</NoInfo>
      )}
    </>
  );
};
