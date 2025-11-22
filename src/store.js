import { configureStore } from "@reduxjs/toolkit";
import backendReducer from './redux/backendSlice'

export const store = configureStore({
    reducer: {
        backend: backendReducer
    }
})