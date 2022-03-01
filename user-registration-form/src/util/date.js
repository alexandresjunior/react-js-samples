export const format = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const differenceInYears = (dateLeft, dateRight) => {
  const date = dateLeft.getTime();
  const dateToCompare = dateRight.getTime();
  const dateDiffInYears = (dateToCompare - date) / (365 * 24 * 60 * 60 * 1000);
  return Math.floor(dateDiffInYears);
};

export const subYears = (date, amount) => {
  date.setFullYear(date.getFullYear() - amount);
  return date;
};

export const isFuture = (date) => {
  return date > new Date();
};
