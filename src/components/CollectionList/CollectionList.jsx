import { List } from './CollectionList.styled';
import { CollectionListItem } from './CollectionListItem';

export const CollectionList = ({ collections }) => {
  return (
    <List>
      {collections.map((item, i) => (
        <CollectionListItem key={item._id} item={item} index={i} />
      ))}
    </List>
  );
};
