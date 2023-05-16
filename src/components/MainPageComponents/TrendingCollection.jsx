import { useMQ, useNfts } from "../../hooks"
import { CollectionList } from "../CollectionList/CollectionList";
import { Container, TitleWrapper, TitleBtnWrapper, Title, Description, BtnLink } from "./MainPageComponents.styled";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { Button } from "../BaseComponents/Buttons/Button";
import { useEffect, useState } from "react";

export const TrendingCollection = () => {
    const {allCollections} = useNfts();
    const {isMobile, isTablet} = useMQ();
    const [trending, setTrending] = useState(null);

    useEffect(() => {
        if (!allCollections) {
            return;
        };

        const counter = () => {
            return Math.floor(Math.random() * allCollections.length);
        };

        setTrending([allCollections[counter()], allCollections[counter()], allCollections[counter()]]);
    }, [allCollections]);

    if (!trending) {
        return;
    };
    
    return (
        <Container>
            <PaddingWrapper>
                <TitleBtnWrapper>
                    <TitleWrapper>
                        <Title>Trending Collection</Title>
                        <Description>Checkout our weekly updated trending collection.</Description>
                    </TitleWrapper>
                    {!isMobile && <BtnLink to='/marketplace/collections'><Button content='View Collections' fill='accent' hfill='text' iconType='copy' w='24px' h='24px' type='button' /></BtnLink>}
                </TitleBtnWrapper>
                <CollectionList collections={isMobile ? trending.slice(0, 1) : isTablet ? trending.slice(0, 2) : trending} />
                {isMobile && <BtnLink to='/marketplace/collections'><Button content='View Collections' fill='accent' hfill='text' iconType='copy' w='24px' h='24px' type='button' /></BtnLink>}
            </PaddingWrapper>
        </Container>
    )
}