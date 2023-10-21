import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

const initialState = products;

const storeListSlice = createSlice({
  name: "store-list",
  initialState: {
    prodList: initialState,
    pageNumber: 1,
  },
  reducers: {
    setFilter(state, action) {
      state.prodList = action.payload;
    },
    incrementPage(state) {
      state.pageNumber++;
    },
    decrementPage(state) {
      state.pageNumber--;
    },
    setPage(state, action) {
      state.pageNumber = action.payload;
    },
    setProductsVisibility(state) {
      for (let i = 0; i < state.prodList.length; i++) {
        if (i < state.pageNumber * 6 && i >= state.pageNumber * 6 - 6) {
          state.prodList[i].display = "flex";
        } else {
          state.prodList[i].display = "none";
        }
      }
    },
    setDefaultStore(state) {
      state.prodList = products;
    },
  },
});

export default storeListSlice.reducer;
export const { setFilter, setProductsVisibility, incrementPage, decrementPage, setPage, setDefaultStore } = storeListSlice.actions;
