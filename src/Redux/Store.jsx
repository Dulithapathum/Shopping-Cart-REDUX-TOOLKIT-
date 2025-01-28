// Redux Store - Centralized store configuration
import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: CartSliceReducer, // Combines cart reducer with the store
  },
});

export default store;
