import {
  FILTERED_BY_AUTHOR,
  FILTERED_BY_CATEGORY,
  FILTERED_BY_TITLE_TEXT,
} from "./actionTypes";

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

export const filteredByTitleText = (author) => {
  return {
    type: FILTERED_BY_TITLE_TEXT,
    payload: author,
  };
};
