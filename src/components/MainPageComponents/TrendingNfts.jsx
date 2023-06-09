import { useMQ, useNfts } from "../../hooks";
import {NftsList} from '../NftsList/NftsList';
import { Container, TitleWrapper, TitleBtnWrapper, Title, Description, BtnLink } from "./MainPageComponents.styled";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { Button } from "../BaseComponents/Buttons/Button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import nftOperations from "../../redux/nft/nftOperations";

export const TrendingNfts = () => {
    const {trendingNfts} = useNfts();
    const {isMobile, isTablet} = useMQ();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(nftOperations.getTrendingNfts());
    }, [dispatch]);

    if (!trendingNfts) {
        return;
    };
    
    return (
        <Container bgColor='secondary'>
            <PaddingWrapper>
                <TitleBtnWrapper>
                    <TitleWrapper>
                        <Title>Discover More NFTs</Title>
                        <Description>Explore new trending NFTs.</Description>
                    </TitleWrapper>
                    {!isMobile && <BtnLink to='/marketplace/nfts'><Button content='See All' fill='accent' hfill='text' iconType='eye' w='24px' h='24px' type='button' /></BtnLink>}
                </TitleBtnWrapper>
                <NftsList nfts={isTablet ? trendingNfts.slice(0, 2) : trendingNfts} />
                {isMobile && <BtnLink to='/marketplace/nfts'><Button content='See All' fill='accent' hfill='text' iconType='eye' w='24px' h='24px' type='button' mt='30px' /></BtnLink>}
            </PaddingWrapper>
        </Container>
    )
}