import {combineReducers} from "redux";
import coins from "./reducers/coinReducer/coinReducer";
import info from "./reducers/infoReducer/infoReducer";

export const rootReducer = combineReducers({
    coins,
    info
})
