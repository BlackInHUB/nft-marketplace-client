import { Form } from "./Forms.styled";
import { Input } from "./Input";
import { Button } from "../Buttons/Button";
import { useForm } from "../../../hooks/useForm";

export const Forms = ({inputs, onSubmit, initialState, buttonText}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

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
            <Button content={buttonText} type='submit' width='100%' pt='12px' pb='12px' />
        </Form>
    )
}