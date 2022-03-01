import { isFuture, differenceInYears } from "../../util/index";

const validateName = (name) => {
  if (name.length === 0) {
    return { isValid: false, helperText: "This field is required" };
  } else if (name.length > 50) {
    return { isValid: false, helperText: "This field must be up to 50 characters"};
  } else if (!name.match(alphanumeric)) {
    return { isValid: false, helperText: "This field must be alphanumeric" };
  }

  return { isValid: true, helperText: "" };
};

const validateEmail = (email) => {
  if (email.length === 0) {
    return { isValid: false, helperText: "Email name is required" };
  } else if (email.length > 255) {
    return { isValid: false, helperText: "Email must be up to 255 characters"};
  } else if (!email.match(emailPattern)) {
    return { isValid: false, helperText: "Please insert a valid email address" };
  }

  return { isValid: true, helperText: "" };
}

const validateUsername = (userName) => {
  if (userName.length === 0) {
    return { isValid: false, helperText: "Username is required" };
  } else if (userName.length < 4) {
    return { isValid: false, helperText: "Username must be at least 4 characters"};
  } else if (userName.length > 16) {
    return { isValid: false, helperText: "Username must be up to 16 characters"};
  }

  // TODO: Check if username already exists (it must be unique)

  return { isValid: true, helperText: "" };
}

const validateBirthday = (birthday) => {
  if (birthday.length === 0) {
    return { isValid: false, helperText: "Birthday is required" };
  } else if (isFuture(birthday)) {
    return { isValid: false, helperText: "Birthday must not be in the future"};
  } else if (differenceInYears(new Date(birthday), new Date()) < 13) {
    return { isValid: false, helperText: "You must be over 13 years old to register"};
  }

  return { isValid: true, helperText: "" };
}

const validatePassword = (password) => {
  if (password.length === 0) {
    return { isValid: false, helperText: "Password is required" };
  } else if (password.length < 6) {
    return { isValid: false, helperText: "Password must be at least 6 characters"};
  } else if (!password.match("(.*[A-Z].*)")) {
    return { isValid: false, helperText: "Password must contain at least one uppercase letter"};
  } else if (!password.match("(.*[a-z].*)")) {
    return { isValid: false, helperText: "Password must contain at least one lowercase letter"};
  } else if (!password.match("(.*\\d.*)")) {
    return { isValid: false, helperText: "Password must contain at least one numeric letter"};
  } else if (!password.match("[!@#$%^&*]")) {
    return { isValid: false, helperText: "Password must contain at least one special character"};
  }

  return { isValid: true, helperText: "" };
}

const validateConfirmPassword = () => {
  return { isValid: true, helperText: "" };
}

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

const alphanumeric = /^[0-9a-zA-Z]+$/;

export { validateName, validateEmail, validateUsername, validateBirthday, validatePassword, validateConfirmPassword };
