import { createSlice } from "@reduxjs/toolkit";

const headerNavSlice = createSlice({
  name: "header-nav",
  initialState: {
    classNameHome: "header__nav_link header__nav_link_active",
    classNameStore: "header__nav_link",
    classNameCart: "header__cart_icon",
    classNameBlog: "header__nav_link",
  },
  reducers: {
    setActiveHome(state) {
      state.classNameHome = "header__nav_link header__nav_link_active";
      state.classNameStore = "header__nav_link";
      state.classNameCart = "header__cart_icon";
      state.classNameBlog = "header__nav_link";
    },
    setActiveStore(state) {
      state.classNameHome = "header__nav_link";
      state.classNameStore = "header__nav_link header__nav_link_active";
      state.classNameCart = "header__cart_icon";
      state.classNameBlog = "header__nav_link";
    },
    setActiveBlog(state) {
      state.classNameHome = "header__nav_link";
      state.classNameStore = "header__nav_link";
      state.classNameCart = "header__cart_icon";
      state.classNameBlog = "header__nav_link header__nav_link_active";
    },
    setActiveCart(state) {
      state.classNameHome = "header__nav_link";
      state.classNameStore = "header__nav_link";
      state.classNameBlog = "header__nav_link";
    },
    setNonActive(state) {
      state.classNameHome = "header__nav_link";
      state.classNameStore = "header__nav_link";
      state.classNameCart = "header__cart_icon";
      state.classNameBlog = "header__nav_link";
    },
  },
});

export default headerNavSlice.reducer;
export const { setActiveHome, setActiveStore, setActiveCart, setActiveBlog, setNonActive } = headerNavSlice.actions;
