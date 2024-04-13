import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { numberFactApi } from "./services/numberFact";

export const store = configureStore({
  reducer: {
    [numberFactApi.reducerPath]: numberFactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(numberFactApi.middleware),
});

setupListeners(store.dispatch);
