import { useDispatch } from "react-redux";
import { List } from "./UserSocialList.styled";
import { UserSocialListItem } from "./UserSocialListItem";
import userOperations from "../../redux/user/userOperations";
import { FieldEditForm } from "../FieldEditForm/FieldEditForm";

export const UserSocialList = ({socialLinks, addLink, setAddLink, editing, footer}) => {
    const dispatch = useDispatch();

    const handleLinksAddSubmit = (newData) => {
        if (socialLinks.includes(newData.linkAdd)) {
            return;
        };

        const newSocialLinks = [...socialLinks];
        newSocialLinks.push(newData.linkAdd);
        
        setAddLink(!addLink);
        dispatch(userOperations.update({socialLinks: newSocialLinks}));
    };

    const handleLinksEditSubmit = (edLink, newLink) => {
        const newSocialLinks = socialLinks.filter(link => link !== edLink);
        newSocialLinks.push(newLink);

        dispatch(userOperations.update({socialLinks: newSocialLinks}));
    }

    const handleLinkDelete = (delLink) => {
        const newSocialLinks = socialLinks.filter(link => link !== delLink);

        dispatch(userOperations.update({socialLinks: newSocialLinks}));
    };

    return (
        <>  
            {socialLinks.length === 0 && !editing && <p>No links added yet..</p>}
            {socialLinks.length > 0 &&
                <List editing={editing} addLink={addLink}>
                    {socialLinks.map(link => <UserSocialListItem key={link + Math.random().toFixed(2)} link={link} editing={editing} footer={footer} deleteLink={handleLinkDelete} submitEditLink={handleLinksEditSubmit} />)}    
                </List>
            }
            {addLink && <FieldEditForm name='linkAdd' value='' onSubmit={handleLinksAddSubmit} onClose={() => setAddLink(!addLink)}/>}
        </>
    )
}