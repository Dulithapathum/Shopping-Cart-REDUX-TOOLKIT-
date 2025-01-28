import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./CartSlice";
const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
  },
});

export default store;
