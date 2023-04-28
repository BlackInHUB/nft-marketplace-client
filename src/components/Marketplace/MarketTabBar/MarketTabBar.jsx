import { useNfts } from "../../../hooks/useNfts";
import { useMQ } from '../../../hooks/useMQ';
import { TabContainer, TabList, TabListItem, TabListItemLink, TabListItemName, TabListItemCounter } from "./MarketTabBar.styled";

export const MarketTabBar = () => {
    const {allNft} = useNfts();
    const {isMobile} = useMQ();
    
    return (
        <TabContainer>
            <TabList>
                <TabListItem>
                    <TabListItemLink to='nfts'>
                        <TabListItemName>NFTs</TabListItemName>
                        {!isMobile && <TabListItemCounter>{allNft.length}</TabListItemCounter>}
                    </TabListItemLink>
                </TabListItem>
                <TabListItem>
                    <TabListItemLink to='collections'>
                        <TabListItemName>Collections</TabListItemName>
                        {!isMobile && <TabListItemCounter>0</TabListItemCounter>}
                    </TabListItemLink>
                </TabListItem>
            </TabList>
        </TabContainer>
    )
};