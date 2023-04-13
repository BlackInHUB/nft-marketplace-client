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

export const Hero = () => {
    const {isMobile} = useMQ();
    const [hlShow, setHlShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHlShow(true);
        }, 500)
    })

    return (
        <HeroSection>
            <HeroInfoContainer>
                <HeroTitle>Discover Digital art & Collect NFTs</HeroTitle>
                <HeroDescription>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</HeroDescription>
                {isMobile && <Highlight show={hlShow} />}
                    <Button content='Get Started' iconType='rocketlaunch' />
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
            {!isMobile && <Highlight show={hlShow}/>}
        </HeroSection>
    )
}