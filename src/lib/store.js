import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";

export const makeStore = () => {
    return configureStore(
        {
            reducer: {
                user: userReducer,
                cart: cartReducer
            }

        })
}
