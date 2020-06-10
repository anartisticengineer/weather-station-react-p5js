import { CITY_IS_LOADED } from "../actions";

const loadedReducer = (state = false, action) => {
  switch (action.type) {
    case CITY_IS_LOADED:
      return true;
    default:
      return state;
  }
};
export default loadedReducer;
