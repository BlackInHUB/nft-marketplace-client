import styled from "styled-components";
import {ReactComponent as User} from '../../../images/icons/User.svg';
import {ReactComponent as Mail} from '../../../images/icons/EnvelopeSimple.svg';
import {ReactComponent as Lock} from '../../../images/icons/LockKey.svg';

export const Form = styled.form`
    max-width: 330px;
`

export const FormInput = styled.input`
    width: 100%;
    outline: none;
    font-size: ${p => p.theme.fontSizes.body};
    line-height: ${p => p.theme.lineHeights.body};
    padding: 12px 20px 12px 50px;
    border: ${p => p.theme.borders.main} ${p => p.theme.colors.grey};
    border-radius: ${p => p.theme.radii.normal};
    transition: all 150ms ease;

    &::placeholder {
        font-family: ${p => p.theme.fontFamily.workSans};
        color: ${p => p.theme.colors.mainBlack};
    };

    &:focus {
        border-color: ${p => p.theme.colors.purple};
    }
`

export const FormInputIcon = styled.div`
    position: absolute;
    left: 20px;
    top: 15px;
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.colors.grey};
    transition: all 150ms ease;

    input:focus ~ & {
        fill: ${p => p.theme.colors.purple};
    }
`

export const FormInputContainer = styled.div`
    position: relative;

    &:not(:last-child) {
        margin-bottom: 15px;
    };

    &:hover {
        ${FormInput} {
            border-color: ${p => p.theme.colors.purple};
        };
        ${FormInputIcon} {
            fill: ${p => p.theme.colors.purple};
        };
    }
`

export const UserIcon = styled(User)`
    width: inherit;
    height: inherit;
    fill: inherit;
    transition: inherit;
`

export const EmailIcon = styled(Mail)`
    width: inherit;
    height: inherit;
    fill: inherit;
    transition: inherit;
`

export const LockIcon = styled(Lock)`
    width: inherit;
    height: inherit;
    fill: inherit;
    transition: inherit;
`