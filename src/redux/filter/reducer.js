import {
  FILTERED_BY_AUTHOR,
  FILTERED_BY_CATEGORY,
  FILTERED_BY_TITLE_TEXT,
} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_BY_CATEGORY:
      return {
        ...state,
        author: "",
        searchText: "",
        category: action.payload,
      };

    case FILTERED_BY_AUTHOR:
      return {
        ...state,
        searchText: "",
        category: "",
        author: action.payload,
      };

    case FILTERED_BY_TITLE_TEXT:
      return {
        ...state,
        category: "",
        author: "",
        searchText: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
