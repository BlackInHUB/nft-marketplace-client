import { 
    HeroHighlightContainer,
    HighlightImg,
    HighlightInfoContainer,
    HighlightTitle,
    HighlightAuthor,
    HighlightAuthotAvatar,
    HighlightAuthorName
} from "./Highlight.styled";
import { useUsers } from "../../hooks";
import { NavLink } from "react-router-dom";

export const Highlight = ({highlight, show}) => {
    const {allUsers} = useUsers();

    if (!highlight) {
        return;
    };

    const {imageUrl, author, title, _id} = highlight;

    const nftAuthor = allUsers.find(user => user._id === author);

    return (
        <HeroHighlightContainer show={show}>
            <NavLink to={`/nft/${_id}`}>
                <HighlightImg url={imageUrl}/>
                <HighlightInfoContainer>
                    <HighlightTitle>{title}</HighlightTitle>
                    <HighlightAuthor>
                        <HighlightAuthotAvatar src={nftAuthor.avatarUrl} alt="avatar"/>
                        <HighlightAuthorName>{nftAuthor.name}</HighlightAuthorName>
                    </HighlightAuthor>
                </HighlightInfoContainer>
            </NavLink>
        </HeroHighlightContainer>
    )
}