import { ADD_NEW_SOCKER } from "../constants/sockerConstants";

export const sockerReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_NEW_SOCKER:
      return [...state, payload ] ;

    default:
      return state;
  }
};
