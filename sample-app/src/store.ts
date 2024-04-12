import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { numberApi } from "./services/number";

export const store = configureStore({
  reducer: {
    [numberApi.reducerPath]: numberApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(numberApi.middleware),
});

setupListeners(store.dispatch);
