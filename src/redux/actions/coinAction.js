import {GET_COIN} from "../../helpers/constants/actionsType";

export const fetchCoin = (coins) => {
    return {
        type: GET_COIN,
        coins
    }
}