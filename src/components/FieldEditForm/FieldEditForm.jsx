import { Form, FormInput, FormTextArea } from "./FieldEditForm.styled";
import {IconButton} from '../BaseComponents/Buttons/IconButton';
import {useForm} from '../../hooks/useForm';

export const FieldEditForm = ({onSubmit, name, value, onClose}) => {
    let initialState = {[name]: value};

    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    return (
        <Form onSubmit={handleSubmit}>
            {name === 'name' ? 
            <FormInput type='text' name={name} value={state[name]} onChange={handleChange} /> :
            name === 'bio' ?
            <FormTextArea name={name} value={state[name]} onChange={handleChange} /> :
            name === 'socialLinks' || name === 'link' ?
            <FormInput type='text' name={name} value={state[name]} onChange={handleChange} placeholder="Put your link here" /> :
            null
            }
            <IconButton iconType='done' fill='white' type='submit' position='static' onClick={handleSubmit} />
            <IconButton iconType='close' fill='white' type='button' position='static' ml='10px' onClick={() => onClose(null)}/>
        </Form>
    )
};