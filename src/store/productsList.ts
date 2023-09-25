import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

const initialState = products;

const productListSlice = createSlice({
  name: "cart-list",
  initialState: {
    prodList: initialState,
  },
  reducers: {
    incrementQuantity(state, action) {
      state.prodList.filter((el) => (el.id == action.payload ? (el.quantity = el.quantity + 1) : false));
    },
    decrementQuantity(state, action) {
      state.prodList.filter((el) => (el.id == action.payload ? (el.quantity = el.quantity - 1) : false));
    },
    setQuantity(state, action) {
      state.prodList.filter((el) => (el.id == action.payload ? (el.quantity = 1) : false));
    },
    removeQuantity(state, action) {
      state.prodList.filter((el) => (el.id == action.payload ? (el.quantity = 0) : false));
    },
    setFilter(state, action) {
      state.prodList = action.payload;
    },
  },
});

export default productListSlice.reducer;
export const { incrementQuantity, decrementQuantity, setQuantity, removeQuantity, setFilter } =
  productListSlice.actions;
