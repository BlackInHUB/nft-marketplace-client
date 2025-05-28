import {
  Container,
  TitleWrapper,
  Title,
  Description,
  TitleBtnWrapper,
  ContentWrapper,
} from './MainPageComponents.styled';
import { PaddingWrapper } from '../BaseComponents/PaddingWrapper/PaddingWrapper.styled';
import { HowItWorksList } from './HowItWorksList/HowItWorksList';

export const HowItWorks = () => {
  return (
    <Container bgColor="main">
      <PaddingWrapper>
        <ContentWrapper>
          <TitleBtnWrapper>
            <TitleWrapper>
              <Title>How it works</Title>
              <Description>Find out how to get started.</Description>
            </TitleWrapper>
          </TitleBtnWrapper>
          <HowItWorksList />
        </ContentWrapper>
      </PaddingWrapper>
    </Container>
  );
};
