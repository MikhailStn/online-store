import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

let initialState = products;

if (localStorage.getItem("cart-items-arr")) {
  initialState = JSON.parse(localStorage.getItem("cart-items-arr") || "");
}

const productListSlice = createSlice({
  name: "cart-list",
  initialState: {
    prodList: initialState,
  },
  reducers: {
    incrementQuantity(state, action) {
      state.prodList.filter((el) => (el.id == action.payload ? (el.quantity = el.quantity + 1) : false));
      localStorage.setItem("cart-items-arr", JSON.stringify(state.prodList));
    },
    decrementQuantity(state, action) {
      state.prodList.filter((el) => (el.id == action.payload ? (el.quantity = el.quantity - 1) : false));
      localStorage.setItem("cart-items-arr", JSON.stringify(state.prodList));
    },
    setQuantity(state, action) {
      state.prodList.filter((el) => (el.id == action.payload ? (el.quantity = 1) : false));
      localStorage.setItem("cart-items-arr", JSON.stringify(state.prodList));
    },
    removeQuantity(state, action) {
      state.prodList.filter((el) => (el.id == action.payload ? (el.quantity = 0) : false));
      localStorage.setItem("cart-items-arr", JSON.stringify(state.prodList));
    },
    setFilter(state, action) {
      state.prodList = action.payload;
    },
  },
});

export default productListSlice.reducer;
export const { incrementQuantity, decrementQuantity, setQuantity, removeQuantity, setFilter } =
  productListSlice.actions;
