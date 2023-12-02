import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:[],
    reducers:{
        searchProducts:(state,action)=>{
            return state.filter(item=>item.type.toLowerCase().includes(action.payload))
         }
    }
})

export const {searchProducts} = productSlice.actions
export default productSlice.reducer