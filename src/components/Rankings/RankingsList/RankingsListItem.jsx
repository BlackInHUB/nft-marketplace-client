import { useMQ } from "../../../hooks";
import {
    ListItem,
    LeftWrapper,
    RightWrapper,
    ListItemLink,
    ListItemRank,
    ListItemArtist,
    ArtistAvatar,
    ArtistName,
    ListItemItem
} from "./RankingsList.styled";
import { useInView } from "react-intersection-observer";

export const RankingsListItem = ({artist, index}) => {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true
    });
    const {isDesktop, isMobile} = useMQ();
    const {name, avatarUrl, created, createdVolume} = artist;

    const volume = created.reduce((acc, item) => acc + parseInt(item.price), 0);

    return (
        <ListItem ref={ref} show={inView}>
            <ListItemLink>
                <LeftWrapper>
                    <ListItemRank>{index + 1}</ListItemRank>
                    <ListItemArtist>
                        <ArtistAvatar src={avatarUrl} />
                        <ArtistName>{name}</ArtistName>
                    </ListItemArtist>
                </LeftWrapper>
                <RightWrapper>
                    {!isMobile && <ListItemItem change='true'>0%</ListItemItem>}
                    {isDesktop && <ListItemItem>{createdVolume}</ListItemItem>}
                    <ListItemItem>{volume} ETH</ListItemItem>
                </RightWrapper>
            </ListItemLink>
        </ListItem>
    )
}