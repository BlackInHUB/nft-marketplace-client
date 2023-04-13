import {ListItem, ListItemLink, StyledIcon} from './UserSocialList.styled';
import {ReactComponent as DiscordIcon} from '../../images/icons/DiscordLogo.svg';
import {ReactComponent as InstagramIcon} from '../../images/icons/InstagramLogo.svg';
import {ReactComponent as YoutubeIcon} from '../../images/icons/YoutubeLogo.svg';
import {ReactComponent as GlobeIcon} from '../../images/icons/Globe.svg';

export const UserSocialListItem = ({link}) => {
    
    return(
        <ListItem>
            <ListItemLink href={link} target='_black'>
                {link.toLowerCase().split('.').includes('discord') ? <StyledIcon as={DiscordIcon} /> :
                link.toLowerCase().split('.').includes('instagram') ? <StyledIcon as={InstagramIcon} /> :
                link.toLowerCase().split('.').includes('youtube') ? <StyledIcon as={YoutubeIcon} /> :
                <StyledIcon as={GlobeIcon} />
                }
            </ListItemLink>
        </ListItem>
    )
}