
import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart", 
    initialState:{items:[]},
    reducers:{
          addtocart:(state,action)=>{
              const product = action.payload;
              const search =state.items.find((val)=>val.id==product.id)
              if(search) {alert("already in add to cart");return};
                state.items.push(product)
          } ,
          clearcart:(state)=>{
            state.items =[]
          },
          removecart:(state,action)=>{
                state.items=state.items.filter((val)=>val.id!==action.payload)
          } 
    } 
});

export const {addtocart,clearcart,removecart} = cartSlice.actions
export default cartSlice.reducer;



