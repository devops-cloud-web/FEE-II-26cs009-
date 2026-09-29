import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
        name: "counter",
        initialState:{count:0},
        reducers: {
            increase:(state)=>{state.count+=1},
            decrease:(state)=>{state.count-=1},
            reset:(state)=>{state.count=0}
        }
})

export const  {increase,decrease,reset} =counterSlice.actions;
export default counterSlice.reducer

