import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "fetch/product",
    async()=>{
        const res =await fetch("https://fakestoreapi.noksha.dev/api/products");
        const data =await res.json();
        return data;
    }   
)


const productSlice =createSlice({
    name:"product",
    initialState:{
        product:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.product = action.payload;
            state.loading = false;
        })
        .addCase(fetchProducts.rejected,(state)=>{
                state.loading = false,
                state.error = "Failed to Fetch"
        })
    }
});

export default productSlice.reducer;


