import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice"

const store = configureStore({
    reducer:{
        cart : cartReducer
    }
})

export default store;