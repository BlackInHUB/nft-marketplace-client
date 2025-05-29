import {
  TitleWrapper,
  Title,
  Description,
  TitleBtnWrapper,
  ContentWrapper,
} from './MainPageComponents.styled';
import { PaddingWrapper, SectionWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';
import { HowItWorksList } from './HowItWorksList/HowItWorksList';

export const HowItWorks = () => {
  return (
    <SectionWrapper>
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
    </SectionWrapper>
  );
};
