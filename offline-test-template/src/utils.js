export const changeDate = (date, label) => {
  const dayMilliseconds = 86400000;
  const dateMilliseconds = new Date(date).getTime();

  let newDate;
  if (label == "increment") {
    newDate = new Date(dateMilliseconds + dayMilliseconds);
  } else {
    newDate = new Date(dateMilliseconds - dayMilliseconds);
  }

  return newDate;
};

export const filterDate = (date, data) => {
  const filteredDateArr = data.filter(
    (info) =>
      new Date(info.vaccination_date).getTime() <= new Date(date).getTime()
  );

  return [filteredDateArr.length, data.length - filteredDateArr.length];
};
