import { Form, FormInput, FormTextArea } from "./FieldEditForm.styled";
import {IconButton} from '../BaseComponents/Buttons/IconButton';
import {useForm} from '../../hooks/useForm';

export const FieldEditForm = ({onSubmit, name, value, onClose, old, linkChange, submitEditLink}) => {
    const initialState = {[name]: value};

    const editLinkSubmit = (e) => {
        e.preventDefault();

        submitEditLink(old, value);
    };

    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    return (
        <Form onSubmit={name === 'linkEdit' ? editLinkSubmit : handleSubmit }>
            {name === 'name' ? 
            <FormInput type='text' name={name} value={state[name]} onChange={handleChange} /> :
            name === 'bio' ?
            <FormTextArea name={name} value={state[name]} onChange={handleChange} /> :
            name === 'linkAdd' ?
            <FormInput type='text' name={name} value={state[name]} onChange={handleChange} placeholder="Put your link here" /> :
            name === 'linkEdit' ?
            <FormInput type='text' name={name} value={value} onChange={linkChange} placeholder={old} /> :
            null
            }
            {name === 'linkEdit' ? 
            <IconButton iconType='done' fill='white' type='submit' position='static' onClick={editLinkSubmit} /> :
            <IconButton iconType='done' fill='white' type='submit' position='static' onClick={handleSubmit} />
            }
            <IconButton iconType='close' fill='white' type='button' position='static' ml='10px' onClick={() => onClose(null)}/>
        </Form>
    )
};