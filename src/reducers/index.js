import searchReducer from "./search";
import loadedReducer from "./isLoaded";
import urlReducer from "./url";
import unitsReducer from "./units";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cityIn: searchReducer,
  cityLoaded: loadedReducer,
  urlIn: urlReducer,
  unitsIn: unitsReducer,
});

export default rootReducer;
