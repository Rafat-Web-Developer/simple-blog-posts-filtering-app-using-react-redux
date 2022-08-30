import { LIKED, UNLIKED } from "./actionType";

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
