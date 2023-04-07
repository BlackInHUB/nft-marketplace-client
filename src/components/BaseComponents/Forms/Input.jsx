import { FormInput, FormInputContainer, FormInputIcon, UserIcon, EmailIcon, LockIcon } from "./Forms.styled"

export const Input = ({type, name, value, onChange}) => {
    return (
        <FormInputContainer>
            <FormInput 
                type={type} 
                name={name}
                placeholder={name === 'name' ? 'Username' : name === 'email' ? 'Email Address' : name === 'password' ? 'Password' : 'Confirm password'}
                value={value}
                onChange={onChange}
            />
            <FormInputIcon>
            {name === 'name' ? <UserIcon/> : name === 'email' ? <EmailIcon /> : <LockIcon />}
            </FormInputIcon>
        </FormInputContainer>
    )
}