export const getMonthAndYear = (date) => {
  const options = { year: "numeric", month: "short" };
  const monthAndYear = new Intl.DateTimeFormat(
    "en-US",
    options
  ).format(new Date(date));
  return monthAndYear;
};
