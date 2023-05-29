import { 
    HeroHighlightContainer,
    HighlightImg,
    HighlightInfoContainer,
    HighlightTitle,
    HighlightAuthor,
    HighlightAuthotAvatar,
    HighlightAuthorName
} from "./Highlight.styled";
import { useNfts, useUsers } from "../../hooks";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

export const Highlight = ({show}) => {
    const {highlight} = useNfts();
    const {isLoggedIn} = useUsers();
    const navigate = useNavigate();

    if (!highlight) {
        return;
    };

    const toNftPage = () => {
        if (!isLoggedIn) {
            return toast.error('You need Log In to see details!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
        navigate(`/nft/${_id}`)
    }

    const {imageUrl, author, title, _id} = highlight;

    return (
        <HeroHighlightContainer show={show} onClick={toNftPage}>
            {/* <NavLink to={`/nft/${_id}`}> */}
                <HighlightImg url={imageUrl}/>
                <HighlightInfoContainer>
                    <HighlightTitle>{title}</HighlightTitle>
                    <HighlightAuthor>
                        <HighlightAuthotAvatar src={author.avatarUrl} alt="avatar"/>
                        <HighlightAuthorName>{author.name}</HighlightAuthorName>
                    </HighlightAuthor>
                </HighlightInfoContainer>
            {/* </NavLink> */}
        </HeroHighlightContainer>
    )
}