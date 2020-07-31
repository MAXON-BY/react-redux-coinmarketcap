import {GET_INFO} from "../../helpers/constants/actionsType";

export const fetchInfoAction = (info) => {
    return {
        type: GET_INFO,
        info
    }
}