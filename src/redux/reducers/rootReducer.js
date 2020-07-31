import {combineReducers} from "redux";
import coins from "./coinReducer";
import info from "./infoReducer";

const rootReducer = combineReducers({
    coins,
    info
})

export default rootReducer