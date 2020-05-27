const loadedReducer = (state = false, action) => {
  switch (action.type) {
    case "CITY_LOADED":
      return true;
    default:
      return state;
  }
};
export default loadedReducer;
