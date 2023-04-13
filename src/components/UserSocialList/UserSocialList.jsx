import { useDispatch } from "react-redux";
import { List } from "./UserSocialList.styled";
import { UserSocialListItem } from "./UserSocialListItem";
import userOperations from "../../redux/user/userOperations";

// {edField !== 'socialLinks' ?
//                         () :
//                         <AddLinkWrapper>
//                             {socialLinks.length > 0 && (socialLinks.map(link => <FieldEditForm key={link} name='link' onSubmit={handleLinksAddSubmit} value={link} onClose={() => handleLinkDelete(link)} />))}
//                             {addLink && <FieldEditForm name='socialLinks' value='' onSubmit={handleLinksAddSubmit} onClose={toggleAddLink} />}
//                         </AddLinkWrapper>
//                     }



export const UserSocialList = ({socialLinks, addLink, setAddLink, editing}) => {
    const dispatch = useDispatch();

    const handleLinksAddSubmit = (newData) => {
        if (socialLinks.includes(newData.socialLinks)) {
            return;
        };

        const newSocialLinks = [...socialLinks];
        newSocialLinks.push(newData.socialLinks);
        
        setAddLink(!addLink);
        dispatch(userOperations.update({socialLinks: newSocialLinks}));
    };

    const handleLinksEditSubmit = () => {

    }

    const handleLinkDelete = (delLink) => {
        const newSocialLinks = socialLinks.filter(link => link !== delLink);

        dispatch(userOperations.update({socialLinks: newSocialLinks}));
    };


    return (
        <>
            {socialLinks.length > 0 ?
                <List>
                    {socialLinks.map(link => <UserSocialListItem key={link + Math.random(1-10)} link={link} />)}    
                </List> :
                <p>No links added yet..</p>
            }
        </>
    )
}