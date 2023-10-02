import { createSlice } from "@reduxjs/toolkit";

let initialState: string[] = [];

if (localStorage.getItem("cart-str-arr")) {
  initialState = JSON.parse(localStorage.getItem("cart-str-arr") || "");
}

const cartListSlice = createSlice({
  name: "cart-list",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
      localStorage.setItem("cart-str-arr", JSON.stringify(state));
    },
    removeProduct(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      localStorage.setItem("cart-str-arr", JSON.stringify(state));
    },
  },
});

export default cartListSlice.reducer;
export const { addProduct, removeProduct } = cartListSlice.actions;
