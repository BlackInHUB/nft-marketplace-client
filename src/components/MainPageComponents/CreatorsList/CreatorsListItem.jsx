import { 
    ListItem,
    AuthorLink,
    AuthorRank,
    AuthorRankNumber,
    AuthorAvatar,
    Wrapper,
    AuthorName,
    AuthorValue,
    AuthorValueNumber
} from "./CreatorsList.styled";

export const CreatorsListItem = ({item, index}) => {
    const {_id, name, avatarUrl, createdVolume} = item;

    return (
        <ListItem>
            <AuthorLink to={`/profile/${_id}`}>
                <AuthorRank>
                    <AuthorRankNumber>{index + 1}</AuthorRankNumber>
                </AuthorRank>
                <AuthorAvatar src={avatarUrl} />
                <Wrapper>
                    <AuthorName>{name}</AuthorName>
                    <AuthorValue>Total Created: <AuthorValueNumber>{createdVolume}</AuthorValueNumber></AuthorValue>
                </Wrapper>
            </AuthorLink>
        </ListItem>
    )
};