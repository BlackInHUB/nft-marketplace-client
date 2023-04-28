import { TabContainer, TabList, TabListItem, TabListItemBtn, TabListItemName, TabListItemCounter } from "./UserNftsTabBar.styled";
import {useMQ, useUsers, useNfts} from '../../hooks';
import { Button } from "../BaseComponents/Buttons/Button";

export const UserNftsTabBar = ({toggleModal, setCategory, category}) => {
    const {isMobile} = useMQ();
    const {user} = useUsers();
    const {usersNft} = useNfts();

    const handleTabSwitch = (e) => {
        setCategory(e.currentTarget.name);
    };

    const created = usersNft.created ? usersNft.created.length : user.created.length;
    const owned = usersNft.owned ? usersNft.owned.length : user.owned.length;

    return (
        <TabContainer>
            <TabList>
                <TabListItem>
                    <TabListItemBtn name='created' active={category === 'created'} type='button' onClick={handleTabSwitch}>
                        <TabListItemName active={category === 'created'}>Created</TabListItemName>
                        {!isMobile && <TabListItemCounter active={category === 'created'}>{created}</TabListItemCounter>}
                    </TabListItemBtn>
                </TabListItem>
                <TabListItem>
                    <TabListItemBtn name='owned' active={category === 'owned'} type='button' onClick={handleTabSwitch}>
                        <TabListItemName  active={category === 'owned'}>Owned</TabListItemName>
                        {!isMobile && <TabListItemCounter  active={category === 'owned'}>{owned}</TabListItemCounter>}
                    </TabListItemBtn>
                </TabListItem>
                <TabListItem>
                    <TabListItemBtn name='collection' active={category === 'collection'} type='button' onClick={handleTabSwitch}>
                        <TabListItemName active={category === 'collection'}>Collection</TabListItemName>
                        {!isMobile && <TabListItemCounter active={category === 'collection'}>0</TabListItemCounter>}
                    </TabListItemBtn>
                </TabListItem>
            </TabList>
            <Button type='button' iconType='plus' fill='accent' hfill='text' w='25px' h='25px' content='Add NFT' onClick={toggleModal} />
        </TabContainer>
    )
}