import {ListItem, ListItemLink, StyledIcon, EditBtnsWrapper} from './UserSocialList.styled';
import {ReactComponent as DiscordIcon} from '../../images/icons/DiscordLogo.svg';
import {ReactComponent as InstagramIcon} from '../../images/icons/InstagramLogo.svg';
import {ReactComponent as YoutubeIcon} from '../../images/icons/YoutubeLogo.svg';
import {ReactComponent as GlobeIcon} from '../../images/icons/Globe.svg';
import {ReactComponent as TwitterIcon} from '../../images/icons/TwitterLogo.svg';
import { IconButton } from '../BaseComponents/Buttons/IconButton';
import { useState } from 'react';
import { FieldEditForm } from '../FieldEditForm/FieldEditForm';

export const UserSocialListItem = ({link, editing, deleteLink, submitEditLink}) => {
    const [editLink, setEditLink] = useState(false);
    const [newLink, setNewLink] = useState('');

    const handleLinkChange = (e) => {
        setNewLink(e.target.value);
    };

    const editLinkToggle = () => {
        setEditLink(!editLink);
    };

    return(
        <ListItem>
            {!editLink ? 
            <ListItemLink href={link} target='_blank'>
                {link.toLowerCase().split(/[./]+/).includes('discord') ? <StyledIcon as={DiscordIcon} /> :
                link.toLowerCase().split(/[./]+/).includes('instagram') ? <StyledIcon as={InstagramIcon} /> :
                link.toLowerCase().split(/[./]+/).includes('youtube') ? <StyledIcon as={YoutubeIcon} /> :
                link.toLowerCase().split(/[./]+/).includes('twitter') ? <StyledIcon as={TwitterIcon} /> :
                <StyledIcon as={GlobeIcon} />
                }
            </ListItemLink> :
            <FieldEditForm name='linkEdit' old={link} value={newLink} onClose={editLinkToggle} linkChange={handleLinkChange} submitEditLink={submitEditLink} />
            }
            {editing && !editLink &&
            <EditBtnsWrapper>
                <IconButton iconType='edit' fill='white' position='static' onClick={editLinkToggle} />
                <IconButton iconType='delete' fill='white' position='static' onClick={() => deleteLink(link)} />
            </EditBtnsWrapper>
            }
        </ListItem>
        
    )
}