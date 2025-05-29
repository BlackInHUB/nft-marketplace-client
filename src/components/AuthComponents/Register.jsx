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
import { toast } from 'react-toastify';
import { SectionWrapper } from '../BaseComponents/Wrappers/Wrappers.styled';

const inputs = [
  {
    name: 'name',
    type: 'text',
  },
  {
    name: 'email',
    type: 'email',
  },
  {
    name: 'password',
    type: 'password',
  },
  {
    name: 'passRepeat',
    type: 'password',
  },
];

const initialState = {
  name: '',
  email: '',
  password: '',
  passRepeat: '',
};

export const Register = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1);
  }, []);

  const handleSubmit = userData => {
    const { password, passRepeat } = userData;

    if (password !== passRepeat) {
      return toast.error('Entered passwords must match!');
    }

    if (!userData) {
      return toast.error('Insert valid data');
    }

    dispatch(userOperations.register(userData));
  };

  return (
    <SectionWrapper>
      <RegisterContainer>
        <ImgWrapper show={show} />
        <ContentWrapper show={show}>
          <RegisterTitle>Create account</RegisterTitle>
          <RegisterDescription>
            Welcome! enter your details and start creating, collecting and selling NFTs.
          </RegisterDescription>
          <Forms
            onSubmit={handleSubmit}
            inputs={inputs}
            initialState={initialState}
            buttonText={'Create account'}
          />
        </ContentWrapper>
      </RegisterContainer>
    </SectionWrapper>
  );
};
