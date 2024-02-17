import { useState } from "react";

export const useForm = ({ initialState, onSubmit, error }) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { value, type, name, files, id } = e.target;

    const newValue = type === "file" ? files : value;

    if (id === "details") {
      return setState((prevState) => ({
        ...prevState,
        details: { ...prevState.details, [name]: newValue },
      }));
    }

    setState((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSubmit(state);

    console.log(error);
    if (!error) {
      setState(initialState);
    }
  };

  return { state, setState, handleChange, handleSubmit };
};
