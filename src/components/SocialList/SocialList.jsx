import { List } from "./SocialList.styled";
import { SocialListItem } from "./SocialListItem";

export const SocialList = ({socialLinks}) => {
    return (
        <List>
            {socialLinks.map(link => <SocialListItem key={link} link={link} />)}
        </List>
    )
}