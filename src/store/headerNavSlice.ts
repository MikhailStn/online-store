import { createSlice } from "@reduxjs/toolkit";

const headerNavSlice = createSlice({
  name: "headerNav",
  initialState: {
    classNameHome: "header__nav_link header__nav_link_active",
    classNameStore: "header__nav_link",
  },
  reducers: {
    setActiveHome(state) {
      state.classNameHome = "header__nav_link header__nav_link_active";
      state.classNameStore = "header__nav_link";
    },
    setActiveStore(state) {
      state.classNameHome = "header__nav_link";
      state.classNameStore = "header__nav_link header__nav_link_active";
    },
  },
});

export default headerNavSlice.reducer;
export const { setActiveHome, setActiveStore } = headerNavSlice.actions;
