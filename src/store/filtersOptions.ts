import { createSlice } from "@reduxjs/toolkit";
import { brands } from "../data/products";
import { products } from "../data/products";

const pricesArr: number[] = [];
products.forEach((el) => pricesArr.push(el.price));
const minPrice = () => pricesArr.reduce((x, y) => Math.min(x, y));
const maxPrice = () => pricesArr.reduce((x, y) => Math.max(x, y));

const stockArr: number[] = [];
products.forEach((el) => stockArr.push(el.stock));
const minStock = () => stockArr.reduce((x, y) => Math.min(x, y));
const maxStock = () => stockArr.reduce((x, y) => Math.max(x, y));

const filtersOptionsSlice = createSlice({
  name: "filters-options",
  initialState: {
    price: [minPrice(), maxPrice()],
    stock: [minStock(), maxStock()],
    brands: brands,
    searchValue: "",
    sortBy: "name",
  },
  reducers: {
    setPrice(state, action) {
      state.price[0] = action.payload[0];
      state.price[1] = action.payload[1];
    },
    setStock(state, action) {
      state.stock = action.payload;
    },
    setBrands(state, action) {
      if (state.brands.includes(action.payload)) {
        const i = state.brands.indexOf(action.payload);
        state.brands.splice(i, 1);
      } else {
        state.brands.push(action.payload);
      }
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export default filtersOptionsSlice.reducer;
export const { setPrice, setStock, setBrands, setSearchValue, setSortBy } = filtersOptionsSlice.actions;
