import { TabContainer, TabList, TabListItem, TabListItemLink, TabListItemName, TabListItemCounter } from "./TabBar.styled";
import {useMQ} from '../../../hooks/useMQ';
import { Button } from "../../BaseComponents/Buttons/Button";

export const TabBar = ({modalOpen, toggleModal}) => {
    const {isMobile} = useMQ();

    return (
        <TabContainer>
            <TabList>
                <TabListItem>
                    <TabListItemLink to='created'>
                        <TabListItemName>Created</TabListItemName>
                        {!isMobile && <TabListItemCounter>0</TabListItemCounter>}
                    </TabListItemLink>
                </TabListItem>
                <TabListItem>
                    <TabListItemLink to='owned'>
                        <TabListItemName>Owned</TabListItemName>
                        {!isMobile && <TabListItemCounter>0</TabListItemCounter>}
                    </TabListItemLink>
                </TabListItem>
                <TabListItem>
                    <TabListItemLink to='collections'>
                        <TabListItemName>Collection</TabListItemName>
                        {!isMobile && <TabListItemCounter>0</TabListItemCounter>}
                    </TabListItemLink>
                </TabListItem>
            </TabList>
            <Button type='button' iconType='plus' fill='purple' hfill='white' w='25px' h='25px' content='Add NFT' onClick={toggleModal} />
        </TabContainer>
    )
}