import rootReducer from "./reducers/rootReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

const store = createStore(rootReducer, applyMiddleware(thunk, logger))
export default store