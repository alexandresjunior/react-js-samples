const validatePhone = (phone) => {
  if (phone.length > 0 && phone.length !== 10) {
    return { isValid: false, helperText: "This field must be 10 digits long" };
  } else if (!phone.match(numeric)) {
    return { isValid: false, helperText: "This field must be numeric" };
  }

  return { isValid: true, helperText: "" };
};

const validateAddress1 = (address) => {
  if (address.length === 0) {
    return { isValid: false, helperText: "This field is required" };
  } else if (address.length > 255) {
    return {
      isValid: false,
      helperText: "This field must be up to 255 characters",
    };
  } else if (!address.match(alphanumeric)) {
    return { isValid: false, helperText: "This field must be alphanumeric" };
  }

  return { isValid: true, helperText: "" };
};

const validateAddress2 = (address) => {
  if (address.length > 255) {
    return {
      isValid: false,
      helperText: "This field must be up to 255 characters",
    };
  } else if (!address.match(alphanumeric)) {
    return { isValid: false, helperText: "This field must be alphanumeric" };
  }

  return { isValid: true, helperText: "" };
};

const validateCity = (city) => {
  if (city.length === 0) {
    return { isValid: false, helperText: "This field is required" };
  } else if (city.length > 255) {
    return {
      isValid: false,
      helperText: "This field must be up to 255 characters",
    };
  } else if (!city.match(alphanumeric)) {
    return { isValid: false, helperText: "This field must be alphanumeric" };
  }

  return { isValid: true, helperText: "" };
};

const validateState = (state) => {
  if (state.length === 0) {
    return { isValid: false, helperText: "Choose one option" };
  }

  return { isValid: true, helperText: "" };
};

const validateZipCode = (zip) => {
  if (zip.length === 0) {
    return { isValid: false, helperText: "This field is required" };
  } else if ((zip.length > 0 && zip.length !== 5) || !zip.match(numeric)) {
    return {
      isValid: false,
      helperText: "This field must be a 5 digit number",
    };
  }

  return { isValid: true, helperText: "" };
};

const numeric = /^[0-9]+$/;

const alphanumeric = /^[0-9a-zA-Z]+$/;

export {
  validatePhone,
  validateAddress1,
  validateAddress2,
  validateCity,
  validateState,
  validateZipCode,
};
