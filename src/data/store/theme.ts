import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export type TypeThemeColors = "theme-light" | "theme-dark"
export type TypeThemeFonts = "font-theme-primary"|"font-theme-secondary"
interface TypeThemeState{
  colorTheme: TypeThemeColors,
  fontTheme: TypeThemeFonts
}

const initialState: TypeThemeState = {
  colorTheme: "theme-dark",
  fontTheme: "font-theme-primary"
}

const themeState = createSlice({
  name: "theme",
  initialState,
  reducers:{
    changeThemeColor: (state, action:PayloadAction<TypeThemeColors>)=>{
      state.colorTheme = action.payload
    },
    changeThemeFonts: (state, action:PayloadAction<TypeThemeFonts>)=>{
      state.fontTheme = action.payload
    }
  }
})

export const themeActions = themeState.actions
export const themeReducer = themeState.reducer