import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

const initialState = products;

const storeListSlice = createSlice({
  name: "store-list",
  initialState: {
    prodList: initialState,
  },
  reducers: {
    setFilter(state, action) {
      state.prodList = action.payload;
    },
  },
});

export default storeListSlice.reducer;
export const { setFilter } = storeListSlice.actions;
