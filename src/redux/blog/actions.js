import { LIKED, UNLIKED } from "./actionTypes";

export const likedAction = () => {
  return {
    type: LIKED,
  };
};

export const unLikedAction = () => {
  return {
    type: UNLIKED,
  };
};
