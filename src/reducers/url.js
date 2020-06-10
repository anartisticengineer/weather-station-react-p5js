import { URL } from "../actions";

const urlReducer = (state = "", action) => {
  switch (action.type) {
    case URL:
      return action.urlIn;
    default:
      return state;
  }
};

export default urlReducer;
