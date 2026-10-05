
import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{items:[]},
    reducers:{
        addtocart:(state,action)=>{
            const product = action.payload;
            state.items.push(product)
        },
        removecart:(state,action)=>{
         state.items=state.items.filter((val)=>val.id!== action.payload)
        },
        clearcart:(state)=>{
                state.items =[]
        }
    }
});


export const {addtocart,removecart,clearcart}= cartSlice.actions;
export default cartSlice.reducer;








