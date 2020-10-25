import { combineReducers, createStore } from "redux";
import appReducer from "./app";

const rootReducer = combineReducers({ app: appReducer });

const configureStore = () => createStore(rootReducer);

export default configureStore;
