import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        isLogin:false
   },

   reducers:{
    update:(state)=>{
       state.icon= 'moon'
    }
  }

})

const { actions, reducer } = cartSlice
export const { create } = actions
export default reducer
