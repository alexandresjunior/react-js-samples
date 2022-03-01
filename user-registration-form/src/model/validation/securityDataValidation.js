const validateSecurityQuestion = (securityQuestion) => {
  if (securityQuestion.length === 0) {
    return { isValid: false, helperText: "Choose one option" };
  }

  return { isValid: true, helperText: "" };
};

const validateAnswer = (answer) => {
  if (answer.length === 0) {
    return { isValid: false, helperText: "This field is required" };
  } else if (!answer.match(alphanumeric)) {
    return {
      isValid: false,
      helperText: "This field must be alphanumeric",
    };
  }

  return { isValid: true, helperText: "" };
};

const validateAcceptanceToU = (acceptanceToU) => {
  if (acceptanceToU.length === 0) {
    return { isValid: false, helperText: "Terms of Use must be checked" };
  }

  return { isValid: true, helperText: "" };
};

const alphanumeric = /^[0-9a-zA-Z]+$/;

export { validateSecurityQuestion, validateAnswer, validateAcceptanceToU };
