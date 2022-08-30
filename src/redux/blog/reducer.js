import { LIKED, UNLIKED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKED:
      break;
    case UNLIKED:
      break;

    default:
      return state;
  }
};
export default reducer;
