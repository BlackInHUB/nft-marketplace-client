import { useMQ, useUsers } from "../../../hooks";
import { Wrapper, InfoBar, LeftWrapper, RightWrapper, InfoBarPart, List, NoInfo } from "./RankingsList.styled";
import { PaddingWrapper } from "../../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { RankingsListItem } from "./RankingsListItem";

const RankingsList = () => {
    const {isDesktop, isTablet, isMobile} = useMQ();
    const {rankings} = useUsers();

    if (!rankings) {
        return;
    };

    return (
        <Wrapper>
            <PaddingWrapper>
                <InfoBar>
                    <LeftWrapper gap='30px'>
                        <InfoBarPart>#</InfoBarPart>
                        <InfoBarPart>Artist</InfoBarPart>
                    </LeftWrapper>
                    <RightWrapper>
                        {!isMobile && <InfoBarPart w={isDesktop ? '160px' : isTablet ? '100px' : '80px'}>Change</InfoBarPart>}
                        {isDesktop && <InfoBarPart w={isDesktop ? '160px' : isTablet ? '100px' : '80px'}>NFTs Created</InfoBarPart>}
                        <InfoBarPart w={isDesktop ? '160px' : isTablet ? '100px' : '80px'}>Volume</InfoBarPart>
                    </RightWrapper>
                </InfoBar>
                <List>
                    {rankings ?
                        rankings.map((artist, index) => <RankingsListItem key={artist._id} artist={artist} index={index} />) :
                        <NoInfo>We have no rankings yet...</NoInfo>
                    }
                </List>
            </PaddingWrapper>
        </Wrapper>
    )
};

export default RankingsList;