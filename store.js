import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./src/slices/apiSlice";
import authReducer from "./src/slices/authSlice";
const store = configureStore({
  reducer: { auth: authReducer, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
