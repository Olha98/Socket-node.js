import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import rootReducer from "./reducers/root";
import { getNewSocket } from "./actions/socketActions";

const socketMiddlewares = (store) => {
  const socket = io("https://stark-brook-53019.herokuapp.com/");

  socket.on("message", (data) => {
    store.dispatch(getNewSocket({ ...data, id: uuidv4() }));
  });
  return (next) => (action) => next(action);
};

const middlewares = [thunk, socketMiddlewares];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
