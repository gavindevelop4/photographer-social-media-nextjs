import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'
import feedReducer from './slices/feedSlice'

export const store = configureStore({
  reducer: {
    counterReducer,
    userReducer,
    feedReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;