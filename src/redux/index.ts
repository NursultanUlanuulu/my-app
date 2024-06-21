import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlices";
// import SingleProductSlice from "./slices/singleProductSlice/SingleProductSlice";
// import authSlice from "./slices/authSlice/authSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    // auth: authSlice,
    // detal:SingleProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Export the type of dispatch
export default store;
