import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import usersReducer from './slices/usersSlice'
import feedReducer from './slices/feedsSlice'

export const store = configureStore({
  reducer: {
    counterReducer,
    usersReducer,
    feedReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;