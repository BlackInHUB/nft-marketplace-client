import { List } from "./CollectionList.styled";
import { CollectionListItem } from "./CollectionListItem";

export const CollectionList = ({collections}) => {
    return (
        <List>
            {collections.map(item => <CollectionListItem key={item._id} item={item} />)}
        </List>
    )
};