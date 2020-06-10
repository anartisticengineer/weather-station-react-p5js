import searchReducer from "./search";
import loadedReducer from "./isLoaded";
import urlReducer from "./url";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cityIn: searchReducer,
  cityLoaded: loadedReducer,
  urlIn: urlReducer,
});

export default rootReducer;
