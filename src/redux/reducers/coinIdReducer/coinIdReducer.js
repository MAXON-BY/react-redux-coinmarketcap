import {GET_ITEM_COIN} from "../../../helpers/constants/actionsType";

const initialState = {
    coin: null
}

const coinIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM_COIN:
            return{
                state,
                coin: action.coin
            }
        default: return state
    }
}

export default coinIdReducer