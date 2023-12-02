import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
    reducer:{
        wishlistReducer: wishlistSlice,
        cartReducer: cartSlice,
        productReducer: productSlice
    }
})

export default store