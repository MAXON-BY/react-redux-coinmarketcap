import {createSlice} from "@reduxjs/toolkit";

//name constant will be useful if you will add tests for reducer
const name = 'coins'

const initialState = {
    coins: null
}

//This is modern redux read DOCS!!! https://redux-toolkit.js.org/introduction/quick-start
const coinsReducer = createSlice({
    name,
    initialState,
    reducers: {
        getCoin: (state, {payload}) => {
            state.coins = payload
        }
    }
})

export const { getCoin } = coinsReducer.actions
export default coinsReducer.reducer
