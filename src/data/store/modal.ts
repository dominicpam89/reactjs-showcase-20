import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  visible: false,
}

const modalState = createSlice({
  name: "modal",
  initialState,
  reducers:{
    show: (state)=>{
      state.visible=true
    },
    hidden: state=>{
      state.visible=false
    }
  }
})

export const modalReducer = modalState.reducer
export const modalActions = modalState.actions