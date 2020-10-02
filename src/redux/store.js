import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root";
import { getNewSocker } from "./actions/sockerActions";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const sockerMiddlewares = (store) => {
  const socket = io("http://localhost:9999/");

  socket.on("message", (data) => {
    console.log(data);
    store.dispatch(getNewSocker({ ...data, id: uuidv4() }));
  });

  return (next) => (action) => next(action);
};

const middlewares = [thunk, sockerMiddlewares];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
