import { createSlice } from "@reduxjs/toolkit";

const cartListSlice = createSlice({
  name: "cart-list",
  initialState: ["evo-x036", "neo-m120", "gear-a001"],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
      console.log(state)
    },
    removeProduct(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      console.log(state)
    },
  },
});

export default cartListSlice.reducer;
export const { addProduct, removeProduct } = cartListSlice.actions;
