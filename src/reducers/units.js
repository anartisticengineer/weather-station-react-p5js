import { UNITS } from "../actions";

const unitsReducer = (state = "metric", action) => {
  switch (action.type) {
    case UNITS:
      return action.unitsIn;
    default:
      return state;
  }
};

export default unitsReducer;
