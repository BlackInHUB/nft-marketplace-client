import { List } from "./CreatorsList.styled";
import { CreatorsListItem } from "./CreatorsListItem";

export const CreatorsList = ({items}) => {

    return (
        <List>
            {items.map((item, index) => <CreatorsListItem key={item._id} item={item} index={index} />)}
        </List>
    )
};