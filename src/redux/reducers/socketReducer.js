import { ADD_NEW_SOCKET } from "../constants/socketConstants";

export const socketReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_NEW_SOCKET:
      return [...state, payload ] ;

    default:
      return state;
  }
};
