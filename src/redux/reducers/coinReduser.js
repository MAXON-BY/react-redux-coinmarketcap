import {GET_COIN} from "../../helpers/constants/actionsType";

const initialState = {
    coins: [],
    isLoading: false
}

const coins = (state = initialState, action) => {
    switch (action.type) {
        case GET_COIN:
            return{
                ...state,
                coins: action.coins
            }
        default: return state
    }
}

export default coins