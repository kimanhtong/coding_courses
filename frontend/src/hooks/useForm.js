import { useState } from "react";

// https://dimitr.im/form-validation-react-hooks

const validate = (validations, values) => {
  const errors = validations
    .map(validation => validation(values))
    .filter(validation => typeof validation === 'object');
  return {isValid: errors.length === 0, errors: errors.reduce((errors, error) => ({...errors, ...error}), {})};
};

const useForm = (initialState = {}, validations = [], onSubmit = () => {}) => {
  const {isValid: initialIsValid, errors: initialErrors} = validate(validations, initialState);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setValid] = useState(initialIsValid);
  const [touched, setTouched] = useState({});
  const changeHandler = event => {
    const newValues = {...values, [event.target.name]: event.target.value};
    const {isValid, errors} = validate(validations, newValues);
    setValues(newValues);
    setValid(isValid);
    setErrors(errors);
    setTouched({...touched, [event.target.name]: true});
  }; 
  const submitHandler = event => {
    event.preventDefault();
    onSubmit(values);
  };
  const resetHandler = (vals) => {
    setValues(vals);
  };
  const updateImageURL = val => {
    const newValues = {...values, img_url: val};
    const {isValid, errors} = validate(validations, newValues);
    setValues(newValues);
    setValid(isValid);
    setErrors(errors);
    setTouched({...touched, img_url: true});
  };
  return {values, changeHandler, isValid, errors, touched, submitHandler, resetHandler, updateImageURL};
};

export { useForm };