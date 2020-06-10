//action creators
export const SEARCH = "SEARCH";
export const CITY_IS_LOADED = "CITY_IS_LOADED";
export const URL = "URL";

//city in will actually be the corresponding id!
const searchCity = (cityIn) => {
  return { type: SEARCH, cityIn };
};

const loadCity = () => {
  return { type: CITY_IS_LOADED };
};

const loadUrl = (urlIn) => {
  return { type: URL, urlIn };
};
