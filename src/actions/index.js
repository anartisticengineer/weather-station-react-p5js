export const searchCity = (cityIn) => {
  return { type: "SEARCH", cityIn };
};

export const loadCity = () => {
  return { type: "LOAD" };
};