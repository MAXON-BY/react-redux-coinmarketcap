import {combineReducers} from "redux";
import coins from "./reducers/coinReducer/coinReducer";
import info from "./reducers/infoReducer/infoReducer";
import coin from "./reducers/coinIdReducer/coinIdReducer";

export const rootReducer = combineReducers({
    coins,
    info,
    coin
})
