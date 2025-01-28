// Redux Slice - Defines cart state and reducer logic
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // Initial cart state is an empty array
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      ); // Check if item already exists in cart
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item exists
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); // Add item to cart with quantity 1
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload); // Remove item by id
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1; // Increment item quantity
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1; // Decrement quantity if greater than 1
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload); // Remove item if quantity is 1
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
