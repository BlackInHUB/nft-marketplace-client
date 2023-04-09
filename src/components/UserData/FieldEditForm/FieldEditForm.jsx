import { Form, FormInput, FormTextArea } from "./FieldEditForm.styled";
import {IconButton} from '../../BaseComponents/Buttons/Buttons';
import {useForm} from '../../../hooks/useForm';

export const FieldEditForm = ({onSubmit, name, value, onClose}) => {
    const initialState = {[name]: value};
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    return (
        <Form onSubmit={handleSubmit}>
            {name === 'name' ? 
            <FormInput type='text' name={name} value={state[name]} onChange={handleChange} /> :
            name === 'bio' ?
            <FormTextArea name={name} value={state[name]} onChange={handleChange} /> :
            name === 'socialLinks' ?
            <FormInput type='text' name={name} value={state[name]} onChange={handleChange} /> :
            null
            }
            <IconButton iconType='done' type='submit' position='static' onClick={handleSubmit} />
            <IconButton iconType='close' type='button' position='static' ml='10px' onClick={() => onClose(null)}/>
        </Form>
    )
};