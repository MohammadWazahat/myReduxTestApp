import { configureStore } from "@reduxjs/toolkit";
import secondSlice from "../features/secondSlice/secondSlice";
import firstSlice from "../features/firstSlice/firstSlice";
import { api } from "../features/apiSlice/apiSlice";
import { apiTwo } from "../features/apiSlice/apiSliceTwo";

export const store = configureStore({
  reducer: {
    storeSliceOne: firstSlice,
    storeSliceTwo: secondSlice,
    [api.reducerPath]: api.reducer,
    [apiTwo.reducerPath]: apiTwo.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   apiTwo.middleware,
  // ],
});
