import { 
    HeroHighlightContainer,
    HighlightImg,
    HighlightInfoContainer,
    HighlightTitle,
    HighlightAuthor,
    HighlightAuthotAvatar,
    HighlightAuthorName
} from "./Highlight.styled";
import { useNfts } from "../../hooks";
import { NavLink } from "react-router-dom";

export const Highlight = ({show}) => {
    const {highlight} = useNfts();

    if (!highlight) {
        return;
    };

    const {imageUrl, author, title, _id} = highlight;

    return (
        <HeroHighlightContainer show={show}>
            <NavLink to={`/nft/${_id}`}>
                <HighlightImg url={imageUrl}/>
                <HighlightInfoContainer>
                    <HighlightTitle>{title}</HighlightTitle>
                    <HighlightAuthor>
                        <HighlightAuthotAvatar src={author.avatarUrl} alt="avatar"/>
                        <HighlightAuthorName>{author.name}</HighlightAuthorName>
                    </HighlightAuthor>
                </HighlightInfoContainer>
            </NavLink>
        </HeroHighlightContainer>
    )
}