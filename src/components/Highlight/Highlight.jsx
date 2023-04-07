import { 
    HeroHighlightContainer,
    HighlightImg,
    HighlightInfoContainer,
    HighlightTitle,
    HighlightAuthor,
    HighlightAuthotAvatar,
    HighlightAuthorName
} from "./Highlight.styled";
import { useMQ } from "../../hooks/useMQ";
import hlMobile from '../../images/hl-ph-mobile.png';
import hlTablet from '../../images/hl-ph-tablet.png';
import hlDesktop from '../../images/hl-ph-desktop.png';
import authorAvatar from '../../images/avatars/avatar14.png'

export const Highlight = ({show}) => {
    const {isMobile, isTablet} = useMQ();

    return (
        <HeroHighlightContainer show={show}>
            <HighlightImg 
                src={isMobile ? hlMobile : isTablet ? hlTablet : hlDesktop}
                alt="Highlight"/>
            <HighlightInfoContainer>
                <HighlightTitle>Space Walking</HighlightTitle>
                <HighlightAuthor>
                    <HighlightAuthotAvatar src={authorAvatar} alt="avatar"/>
                    <HighlightAuthorName>Animakid</HighlightAuthorName>
                </HighlightAuthor>
            </HighlightInfoContainer>
        </HeroHighlightContainer>
    )
}