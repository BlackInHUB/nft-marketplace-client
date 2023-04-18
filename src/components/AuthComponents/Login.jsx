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
        name: 'email',
        type: 'email'
    },
    {
        name: 'password',
        type: 'password'
    }
];

const initialState = {
    email: '',
    password: ''
};

export const Login = ({isOpen, loginToggle}) => {
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
            loginToggle();
        }, 500);
    };

    useEscapeKey(handleClose);

    const handleSubmit = (userData) => {
        if (!userData) {
            return alert('Insert valid data!')
        }
        handleClose();
        dispatch(userOperations.login(userData));
    };

    return (
        createPortal(
            <RegisterContainer>
                <ImgWrapper show={show} />
                <ContentWrapper show={show} >
                    <IconButton type='button' iconType='close' onClick={handleClose} />
                    <RegisterTitle>Log In</RegisterTitle>
                    <RegisterDescription>Welcome! Enter your email & password, please.</RegisterDescription>
                    <Forms onSubmit={handleSubmit} inputs={inputs} initialState={initialState} buttonText={'Log In'} />
                </ContentWrapper>
            </RegisterContainer>,
            document.querySelector('#modal-root')
        )
    )
}