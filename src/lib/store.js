import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const makeStore = () => {
    return configureStore(
        {
            reducer: {
                
                cart: cartReducer
            }

        })
}
