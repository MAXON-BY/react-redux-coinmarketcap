import {GET_ITEM_COIN} from "../../helpers/constants/actionsType";

export const getCoinIdAction = (coin) => {
    return {
        type: GET_ITEM_COIN,
        coin
    }
}