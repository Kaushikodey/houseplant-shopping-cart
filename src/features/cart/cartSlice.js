import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalItems: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { ...plant, quantity: 1 };
        state.totalItems += 1;
        state.totalPrice += plant.price;
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      state.items[id].quantity += 1;
      state.totalItems += 1;
      state.totalPrice += state.items[id].price;
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      state.items[id].quantity -= 1;
      state.totalItems -= 1;
      state.totalPrice -= state.items[id].price;

      if (state.items[id].quantity === 0) {
        delete state.items[id];
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const item = state.items[id];
      state.totalItems -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      delete state.items[id];
    }
  }
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem
} = cartSlice.actions;

export default cartSlice.reducer;
