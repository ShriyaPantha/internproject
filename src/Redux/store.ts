import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";

export const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});

// ✅ Types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;