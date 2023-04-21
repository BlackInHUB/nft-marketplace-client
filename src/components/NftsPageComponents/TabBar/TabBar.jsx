import { TabContainer, TabList, TabListItem, TabListItemLink, TabListItemName, TabListItemCounter } from "./TabBar.styled";
import {useMQ} from '../../../hooks/useMQ';
import { Button } from "../../BaseComponents/Buttons/Button";
import {useUsers} from '../../../hooks/useUsers';
import { useNfts } from "../../../hooks/useNfts";

export const TabBar = ({toggleModal}) => {
    const {isMobile} = useMQ();
    const {user} = useUsers();
    const {usersNft} = useNfts();

    const created = usersNft.created ? usersNft.created.length : user.created.length;
    const owned = usersNft.owned ? usersNft.owned.length : user.owned.length;

    return (
        <TabContainer>
            <TabList>
                <TabListItem>
                    <TabListItemLink to='created'>
                        <TabListItemName>Created</TabListItemName>
                        {!isMobile && <TabListItemCounter>{created}</TabListItemCounter>}
                    </TabListItemLink>
                </TabListItem>
                <TabListItem>
                    <TabListItemLink to='owned'>
                        <TabListItemName>Owned</TabListItemName>
                        {!isMobile && <TabListItemCounter>{owned}</TabListItemCounter>}
                    </TabListItemLink>
                </TabListItem>
                <TabListItem>
                    <TabListItemLink to='collections'>
                        <TabListItemName>Collection</TabListItemName>
                        {!isMobile && <TabListItemCounter>0</TabListItemCounter>}
                    </TabListItemLink>
                </TabListItem>
            </TabList>
            <Button type='button' iconType='plus' fill='accent' hfill='text' w='25px' h='25px' content='Add NFT' onClick={toggleModal} />
        </TabContainer>
    )
}