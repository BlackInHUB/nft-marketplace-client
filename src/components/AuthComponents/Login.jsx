import {
  ContentWrapper,
  ImgWrapper,
  RegisterContainer,
  RegisterTitle,
  RegisterDescription,
} from './AuthComponents.styled';
import { useEffect, useState } from 'react';
import { Forms } from '../BaseComponents/Forms/Forms';
import userOperations from '../../redux/user/userOperations';
import { useDispatch } from 'react-redux';
import { SectionWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';

const inputs = [
  {
    name: 'email',
    type: 'email',
  },
  {
    name: 'password',
    type: 'password',
  },
];

const initialState = {
  email: '',
  password: '',
};

export const Login = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1);
  }, []);

  const handleSubmit = userData => {
    if (!userData) {
      return alert('Insert valid data!');
    }

    dispatch(userOperations.login(userData));
  };

  return (
    <SectionWrapper>
      <RegisterContainer>
        <ImgWrapper show={show} />
        <ContentWrapper show={show}>
          <RegisterTitle>Log In</RegisterTitle>
          <RegisterDescription>Welcome! Enter your email & password, please.</RegisterDescription>
          <Forms
            onSubmit={handleSubmit}
            inputs={inputs}
            initialState={initialState}
            buttonText={'Log In'}
          />
        </ContentWrapper>
      </RegisterContainer>
    </SectionWrapper>
  );
};
