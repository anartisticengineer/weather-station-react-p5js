import searchReducer from "./search";
import loadedReducer from "./isLoaded";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cityIn: searchReducer,
  cityLoaded: loadedReducer,
});

export default rootReducer;
