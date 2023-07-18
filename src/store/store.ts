import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './slices/usersSlice'
import feedReducer from './slices/feedsSlice'

export const store = configureStore({
  reducer: {
    usersReducer,
    feedReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;