const initialState = {
    coins: []
}

const coins = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COIN":
            return{
                ...state,
                coins: action.coins
            }
        default: return state
    }
}

export default coins