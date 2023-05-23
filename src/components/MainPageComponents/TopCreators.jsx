import { Container, BtnLink, TitleWrapper, TitleBtnWrapper, Title, Description } from "./MainPageComponents.styled";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { Button } from "../BaseComponents/Buttons/Button";
import { useMQ, useUsers } from "../../hooks";
import { CreatorsList } from "./CreatorsList/CreatorsList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import userOperations from '../../redux/user/userOperations';

export const TopCreators = () => {
    const {isMobile} = useMQ();
    const {topCreators} = useUsers();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userOperations.getTopRanked());
    }, [dispatch]);

    if (!topCreators) {
        return;
    };

    return (
        <Container bgColor='main'>
            <PaddingWrapper>
                <TitleBtnWrapper>
                    <TitleWrapper>
                        <Title>Top Creators</Title>
                        <Description>Checkout Top Rated Creators on the NFT Marketplace.</Description>
                    </TitleWrapper>
                    {!isMobile && <BtnLink to='/rankings'><Button content='View Rankings' fill='accent' hfill='text' iconType='rocketlaunch' w='24px' h='24px' type='button' /></BtnLink>}
                </TitleBtnWrapper>
                <CreatorsList items={topCreators} />
                {isMobile && <BtnLink to='/rankings'><Button content='View Rankings' fill='accent' hfill='text' iconType='rocketlaunch' w='24px' h='24px' type='button' mt={isMobile ? '30px' : 0} /></BtnLink>}
            </PaddingWrapper>
        </Container>
    )
};