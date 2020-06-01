//action creators
//city in will actually be the corresponding id!
export const searchCity = (cityIn) => {
  return { type: "SEARCH", cityIn };
};

export const loadCity = () => {
  return { type: "CITY_LOADED" };
};
