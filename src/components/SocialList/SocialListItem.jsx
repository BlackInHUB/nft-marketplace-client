import {ListItem, ListItemLink} from './SocialList.styled';

export const SocialListItem = ({link}) => {
    return(
        <ListItem>
            <ListItemLink href={link} />
        </ListItem>
    )
}