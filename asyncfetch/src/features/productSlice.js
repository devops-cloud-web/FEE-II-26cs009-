
import {createAsyncThunk} from "@reduxjs/toolkit"
import {createSlice} from "@reduxjs/toolkit"

export const fetchProduct = createAsyncThunk(
    "products/fetch",
    async()=>{
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        return data 
    }
);

const productSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        loading: false,
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.pending,(state,action)=>{
            state.loading = true;
            state.error= null
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.items = action.payload
        })
        .addCase(fetchProduct.rejected,(state)=>{
            state.loading = false,
            state.error = action.error.message;
        })
    }
    
})

export default productSlice.reducer;


