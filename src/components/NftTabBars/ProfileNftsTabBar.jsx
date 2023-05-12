import { TabContainer, TabList, TabListItem, TabListItemBtn, TabListItemName, TabListItemCounter } from "./UserNftsTabBar.styled";
import {useMQ, useUsers, useNfts} from '../../hooks';

export const ProfileNftsTabBar = ({setCategory, category}) => {
    const {isMobile} = useMQ();
    const {profile} = useUsers();
    const {profileNft} = useNfts();

    const handleTabSwitch = (e) => {
        setCategory(e.currentTarget.name);
    };

    const created = profileNft.created ? profileNft.created.length : profile.created.length;
    const owned = profileNft.owned ? profileNft.owned.length : profile.owned.length;
    const collection = profileNft.collections.length;

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
                        {!isMobile && <TabListItemCounter active={category === 'collection'}>{collection}</TabListItemCounter>}
                    </TabListItemBtn>
                </TabListItem>
            </TabList>
        </TabContainer>
    )
}