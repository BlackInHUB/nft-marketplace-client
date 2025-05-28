import {
  Container,
  Title,
  Description,
  DigestWrapper,
  DigestImg,
  DigestContentWrapper,
  DigestForm,
  DigestFormInput,
  DigestFormBtn,
  DigestFormBtnIcon,
} from './MainPageComponents.styled';
import digestimg from '../../images/digestimg.jpg';
import { PaddingWrapper } from '../BaseComponents/PaddingWrapper/PaddingWrapper.styled';
import { useState } from 'react';

export const WeeklyDigest = () => {
  const [submit, setSubmit] = useState(false);

  const handleDigestSubmit = e => {
    e.preventDefault();

    setSubmit(!submit);
  };

  return (
    <Container bgColor="main">
      <PaddingWrapper>
        <DigestWrapper>
          <DigestImg img={digestimg} />
          <DigestContentWrapper>
            <Title>Join our weekly Digest.</Title>
            <Description>Get exclusive promotions & updates straight to your inbox.</Description>
            <DigestForm onSubmit={handleDigestSubmit}>
              <DigestFormInput type="text" submit={submit} placeholder="Enter your email here" />
              <DigestFormBtn type="submit" submit={submit} onClick={handleDigestSubmit}>
                <DigestFormBtnIcon />
                Subscribe
              </DigestFormBtn>
            </DigestForm>
          </DigestContentWrapper>
        </DigestWrapper>
      </PaddingWrapper>
    </Container>
  );
};
