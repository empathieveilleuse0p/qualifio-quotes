import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import quoteReducer from "./features/quote/quoteSlice";

export const store = configureStore({
  reducer: {
    quotes: quoteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger) as any,
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
