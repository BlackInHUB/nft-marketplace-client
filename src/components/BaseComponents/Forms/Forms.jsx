import { Form } from "./Forms.styled";
import { Input } from "./Input";
import { Button } from "../Buttons/Button";
import { useForm } from "../../../hooks/useForm";
import { useUsers } from "../../../hooks/useUsers";

export const Forms = ({ inputs, onSubmit, initialState, buttonText }) => {
    const { error } = useUsers();
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit, error });
    
    const disabledBtn = Object.values(state).some(v => v === '') ? true : false;

    return (
        <Form onSubmit={handleSubmit}>
            {inputs.map(({type, name}) => 
                <Input 
                    key={name}
                    type={type}
                    name={name}
                    value={state[name]}
                    placeholder={name === 'name' ? 'Username' : name === 'email' ? 'Email Address' : name === 'password' ? 'Password' : 'Confirm password'}
                    onChange={handleChange}
                />
            )}
            <Button content={buttonText} disabled={disabledBtn} type='submit' width='100%' p='12px 50px' />
        </Form>
    )
}