export const fetchCoin = (coins) => {
    return {
        type: "GET_COIN",
        coins
    }
}