
import {configureStore} from "@reduxjs/toolkit"
import reducercart from "../features/cartReducer"

const store = configureStore({
    reducer:{
        cart:reducercart
    }
});

export  default store