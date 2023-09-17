import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const cartListSlice = createSlice({
  name: "cart-list",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

export default cartListSlice.reducer;
export const { addProduct, removeProduct } = cartListSlice.actions;
