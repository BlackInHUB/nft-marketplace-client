import { Container, TitleWrapper, Title, Description, TitleBtnWrapper } from "./MainPageComponents.styled";
import { PaddingWrapper } from "../BaseComponents/PaddingWrapper/PaddingWrapper.styled";
import { HowItWorksList } from "./HowItWorksList/HowItWorksList";

export const HowItWorks = () => {
    return (
        <Container bgColor='main'>
            <PaddingWrapper>
                <TitleBtnWrapper>
                    <TitleWrapper>
                        <Title>How it works</Title>
                        <Description>Find out how to get started.</Description>
                    </TitleWrapper>
                </TitleBtnWrapper>
                <HowItWorksList />
            </PaddingWrapper>
        </Container>
    )
};