import { configureStore } from "@reduxjs/toolkit"
import { themeReducer } from "./theme"
import { modalReducer } from "./modal"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"

export const store = configureStore({
  reducer:{
    theme: themeReducer,
    modal: modalReducer,
  },
})

type AppDispatch = typeof store.dispatch
export const useAppDispatch: ()=>AppDispatch = useDispatch

type RootState = ReturnType<typeof store.getState>
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector