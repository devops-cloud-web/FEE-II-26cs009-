
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice"
import productReducer from "../features/productSlice"
const store = configureStore({
    reducer: {
        cart:cartReducer,
        products:productReducer
    }
});
export default store