import { useState } from "react";

export const useForm = ({initialState, onSubmit}) => {
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        const {value, type, name, files} = e.target;

        const newValue = type === 'file' ? files : value;

        setState(prevState => ({...prevState, [name]: newValue}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit(state);
        setState(initialState);
    };

    return {state, setState, handleChange, handleSubmit};
};

