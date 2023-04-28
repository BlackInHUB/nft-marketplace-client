import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { HeroSection, 
    HeroInfoContainer, 
    HeroTitle,
    HeroDescription,
    HeroInfoList,
    HeroInfoListItem,
    HeroInfoListItemNumber,
    HeroInfoListItemText
} from "./Hero.styled";
import { Button } from "../BaseComponents/Buttons/Button";
import { Highlight } from "../Highlight/Highlight";
import { useMQ } from "../../hooks/useMQ";
import { useEffect, useState } from "react";
import { useNfts } from "../../hooks";

export const Hero = () => {
    const {allNft} = useNfts();
    const {isMobile} = useMQ();
    const [highlight, setHighlight] = useState(null);
    const [hlShow, setHlShow] = useState(false);

    useEffect(() => {
        setHighlight(allNft[Math.floor(Math.random() * (allNft.length + 1))]);
        setTimeout(() => {
            setHlShow(true);
        }, 250)
    }, [allNft]);

    return (
        <PaddingWrapper>
            <HeroSection>
                <HeroInfoContainer>
                    <HeroTitle>Discover Digital art & Collect NFTs</HeroTitle>
                    <HeroDescription>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</HeroDescription>
                    {isMobile && <Highlight highlight={highlight} show={hlShow} />}
                        <Button type='button' content='Get Started' fill='accent' hfill='text' iconType='rocketlaunch' />
                    <HeroInfoList>
                        <HeroInfoListItem>
                            <HeroInfoListItemNumber>240k+</HeroInfoListItemNumber>
                            <HeroInfoListItemText>Total Sale</HeroInfoListItemText>
                        </HeroInfoListItem>
                        <HeroInfoListItem>
                            <HeroInfoListItemNumber>100k+</HeroInfoListItemNumber>
                            <HeroInfoListItemText>Auctions</HeroInfoListItemText>
                        </HeroInfoListItem>
                        <HeroInfoListItem>
                            <HeroInfoListItemNumber>240k+</HeroInfoListItemNumber>
                            <HeroInfoListItemText>Artists</HeroInfoListItemText>
                        </HeroInfoListItem>
                    </HeroInfoList>
                </HeroInfoContainer>
                {!isMobile && <Highlight highlight={highlight} show={hlShow}/>}
            </HeroSection>
        </PaddingWrapper>
    )
}