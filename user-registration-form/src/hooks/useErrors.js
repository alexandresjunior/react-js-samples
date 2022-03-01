import { useState } from "react";

const useErrors = (validation) => {
  const initState = createInitialState(validation);

  const [errors, setErrors] = useState(initState);

  const validateFields = (event) => {
    const { name, value } = event.target;
    const newState = { ...errors };

    newState[name] = validation[name](value);

    setErrors(newState);
  };

  const allFieldsAreValid = () => {
    for (let field in errors) {
      if (!errors[field].isValid) {
        return false;
      }
    }
    return true;
  };

  return [errors, validateFields, allFieldsAreValid];
};

const createInitialState = (validation) => {
  const initState = {};

  for (let field in validation) {
    initState[field] = { isValid: false, helperText: "" };
  }

  return initState;
};

export default useErrors;
