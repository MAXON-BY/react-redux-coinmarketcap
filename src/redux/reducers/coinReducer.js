import {GET_COIN} from "../../helpers/constants/actionsType";

const initialState = {
    coins: [],
    isLoading: true
}

const coinsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COIN:
            return{
                ...state,
                coins: action.coins,
                isLoading: false
            }
        default: return state
    }
}

export default coinsReducer