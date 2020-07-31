import {GET_COIN} from "../../helpers/constants/actionsType";

export const fetchCoinAction = (coins) => {
    return {
        type: GET_COIN,
        coins
    }
}
