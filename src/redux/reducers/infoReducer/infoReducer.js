import {GET_INFO} from "../../../helpers/constants/actionsType";

const initialState = {
    info: []
};

//TODO @MaxNyrkov remade this reducer to createSlice!!!
const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO:
            return {
                ...state,
                info: action.info
            }
        default: return state
    }
}

export default infoReducer
