import { FILTERED_BY_AUTHOR, FILTERED_BY_CATEGORY } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_BY_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case FILTERED_BY_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
