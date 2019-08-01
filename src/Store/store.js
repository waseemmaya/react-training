import { createStore } from "redux";
import authReducer from "./reducer";

function configureStore(initialState) {
  const store = createStore(authReducer, initialState);
  return store;
}

export default configureStore;
