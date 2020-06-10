//reducer: input for city result
import { SEARCH } from "../actions";

const searchReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH:
      return action.cityIn;
    default:
      return state;
  }
};

export default searchReducer;
