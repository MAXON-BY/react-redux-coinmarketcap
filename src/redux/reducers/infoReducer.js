import {GET_INFO} from "../../helpers/constants/actionsType";

const initialState = {
    info: []
};

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