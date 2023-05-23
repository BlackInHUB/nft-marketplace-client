import { useMQ } from "../../../hooks";
import { TabContainer, TabList, TabListItem, TabListItemLink, TabListItemName } from "./RankingsTabBar.styled";

export const RankingsTabBar = () => {
    const {isMobile} = useMQ();

    return (
        <TabContainer>
            <TabList>
                <TabListItem>
                    <TabListItemLink to='today'>
                        <TabListItemName>{isMobile ? '1d' : 'Today'}</TabListItemName>
                    </TabListItemLink>
                </TabListItem>
                <TabListItem>
                    <TabListItemLink to='week'>
                        <TabListItemName>{isMobile ? '7d' : 'This Week'}</TabListItemName>
                    </TabListItemLink>
                </TabListItem>
                <TabListItem>
                    <TabListItemLink to='month'>
                        <TabListItemName>{isMobile ? '30d' : 'This Month'}</TabListItemName>
                    </TabListItemLink>
                </TabListItem>
                <TabListItem>
                    <TabListItemLink to='alltime'>
                        <TabListItemName>All Time</TabListItemName>
                    </TabListItemLink>
                </TabListItem>
            </TabList>
        </TabContainer>
    )
}