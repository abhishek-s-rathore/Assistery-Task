export const getVaccinationDate = async () => {
  return await (await fetch("./data/vaccine_dates.json")).json();
};

export const getCurrentDate = async () => {
  return await (await fetch("./data/current_date.json")).json();
};
