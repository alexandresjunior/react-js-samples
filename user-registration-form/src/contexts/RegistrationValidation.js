import React from "react";
import {
  validateName,
  validateEmail,
  validateUsername,
  validateBirthday,
  validatePassword,
  validateConfirmPassword,
} from "../model/validation/personalDataValidation";

import {
  validatePhone,
  validateAddress1,
  validateAddress2,
  validateCity,
  validateState,
  validateZipCode,
} from "../model/validation/contactDataValidation";

import {
    validateSecurityQuestion,
    validateAnswer,
    validateAcceptanceToU
  } from "../model/validation/securityDataValidation";

const PersonalDataValidationContext = React.createContext({
  firstName: validateName,
  lastName: validateName,
  email: validateEmail,
  userName: validateUsername,
  birthday: validateBirthday,
  password: validatePassword,
  confirmPassword: validateConfirmPassword,
});

const ContactDataValidationContext = React.createContext({
  homePhone: validatePhone,
  mobilePhone: validatePhone,
  address1: validateAddress1,
  address2: validateAddress2,
  city: validateCity,
  state: validateState,
  zipCode: validateZipCode,
});

const SecurityDataValidationContext = React.createContext({
  securityQuestion: validateSecurityQuestion,
  answer: validateAnswer,
  acceptanceToU: validateAcceptanceToU
});

export { PersonalDataValidationContext, ContactDataValidationContext, SecurityDataValidationContext };