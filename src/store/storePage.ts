import { createSlice } from "@reduxjs/toolkit";

const storePageNumberSlice = createSlice({
  name: "page-number",
  initialState: {
    pageNumber: 1,
  },
  reducers: {
    incrementPage(state) {
      state.pageNumber++;
    },
    decrementPage(state) {
      state.pageNumber--;
    },
  },
});

export default storePageNumberSlice.reducer;
export const { incrementPage, decrementPage } = storePageNumberSlice.actions;
