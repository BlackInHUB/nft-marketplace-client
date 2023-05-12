import { useUsers } from "../../hooks";
import {
    ListItem,
    MainImg,
    OtherWrapper,
    OtherImgs,
    ImgsCounter,
    Counter,
    Title,
    Author,
    AuthorAvatar,
    AuthorName,
} from "./CollectionList.styled";
import {NavLink} from 'react-router-dom';

export const CollectionListItem = ({item}) => {
    const {nfts, author, title, _id} = item;
    const {allUsers} = useUsers();

    const user = allUsers.find(e => e._id === author);

    return (
        <ListItem>
            <NavLink to={`/nfts/collection/${_id}`}>
                <MainImg src={nfts[0].imageUrl} />
                <OtherWrapper>
                    <OtherImgs src={nfts[1].imageUrl} />
                    {nfts.length > 2 && <OtherImgs src={nfts[2].imageUrl} />}
                    <ImgsCounter>
                        <Counter>{nfts.length}+</Counter>
                    </ImgsCounter>
                </OtherWrapper>
                <Title>{title}</Title>
                <Author>
                    <AuthorAvatar src={user.avatarUrl} />
                    <AuthorName>{user.name}</AuthorName>
                </Author>
            </NavLink>
        </ListItem>
    )
}