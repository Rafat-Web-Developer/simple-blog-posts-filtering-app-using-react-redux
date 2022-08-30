import { FILTERED_BY_AUTHOR, FILTERED_BY_CATEGORY } from "./actionTypes";

export const filteredByCategory = (category) => {
  return {
    type: FILTERED_BY_CATEGORY,
    payload: category,
  };
};

export const filteredByAuthor = (author) => {
  return {
    type: FILTERED_BY_AUTHOR,
    payload: author,
  };
};
