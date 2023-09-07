import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

const productPathSlice = createSlice({
  name: "product-path",
  initialState: {
    path: "/404",
    id: "",
    name: "",
    description: "",
    configuration: "",
    brand: "",
    price: 0,
    stock: 0,
    images: [""],
  },
  reducers: {
    changePath(state, action) {
      state.path = "/" + action.payload;
      const product = products.filter((el) => el.name == action.payload)[0];
      state.id = product.id;
      state.name = product.name;
      state.description = product.description;
      state.configuration = product.configuration;
      state.brand = product.brand;
      state.price = product.price;
      state.stock = product.stock;
      state.images = product.images;
      localStorage.setItem("curr-product", action.payload);
    },
  },
});

export default productPathSlice.reducer;
export const { changePath } = productPathSlice.actions;
