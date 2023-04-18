import { ContentWrapper, ImgWrapper, RegisterContainer, RegisterTitle, RegisterDescription } from "./AuthComponents.styled";
import { IconButton } from "../BaseComponents/Buttons/IconButton";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { Forms } from "../BaseComponents/Forms/Forms";
import userOperations from "../../redux/user/userOperations";
import { useDispatch } from "react-redux";
import { useUsers } from "../../hooks/useUsers";
import { useNavigate } from "react-router-dom";

const inputs = [
    {
        name: 'name',
        type: 'text'
    },
    {
        name: 'email',
        type: 'email'
    },
    {
        name: 'password',
        type: 'password'
    },
    {
        name: 'passRepeat',
        type: 'password'
    }
];

const initialState = {
    name: '',
    email: '',
    password: '',
    passRepeat: ''
};

export const Register = ({isOpen, registerToggle}) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoggedIn} = useUsers();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/userpage');
        };
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        setShow(isOpen)
    }, [isOpen]);
    
    const handleClose = () => {
        setShow(!show)
        setTimeout(() => {
            registerToggle();
        }, 500);
    };

    useEscapeKey(handleClose);

    const handleSubmit = (userData) => {
        const {password, passRepeat} = userData;

        if (password !== passRepeat) {
            return alert('Entered passwords must match!');
        };

        if (!userData) {
            return alert('Insert valid data!')
        }

        handleClose();

        dispatch(userOperations.register(userData));
    };

    return (
        createPortal(
            <RegisterContainer>
                <ImgWrapper show={show} />
                <ContentWrapper show={show} >
                    <IconButton type='button' iconType='close' onClick={handleClose} />
                    <RegisterTitle>Create account</RegisterTitle>
                    <RegisterDescription>Welcome! enter your details and start creating, collecting and selling NFTs.</RegisterDescription>
                    <Forms onSubmit={handleSubmit} inputs={inputs} initialState={initialState} buttonText={'Create account'} />
                </ContentWrapper>
            </RegisterContainer>,
            document.querySelector('#modal-root')
        )
    )
}