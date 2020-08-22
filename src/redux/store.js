import {rootReducer} from "./rootReducer";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware(),
        //here you can add additional middleware
    ],
    //here you can add default store for firs render
})
