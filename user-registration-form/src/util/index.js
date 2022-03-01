const getClassName = (error) => {
  return isEmpty(error) ? "" : "has-error";
};

const isEmpty = (text) => {
  return text === "";
};

export * from "./date";
export { getClassName, isEmpty };
