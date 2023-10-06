import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

const mainSliderSlice = createSlice({
  name: "slider",
  initialState: {
    noveltiesMargin: 0,
    recommendMargin: 0,
  },
  reducers: {
    goPrevNovSlide(state) {
      if (state.noveltiesMargin == 0) {
        state.noveltiesMargin = -((products.length - 3) * 257);
      } else {
        state.noveltiesMargin = state.noveltiesMargin + 257;
      }
    },
    goNextNovSlide(state) {
      if (state.noveltiesMargin == -((products.length - 3) * 257)) {
        state.noveltiesMargin = 0;
      } else {
        state.noveltiesMargin = state.noveltiesMargin - 257;
      }
    },
    goPrevRecSlide(state) {
      if (state.recommendMargin == 0) {
        state.recommendMargin = -((products.length - 3) * 257);
      } else {
        state.recommendMargin = state.recommendMargin + 257;
      }
    },
    goNextRecSlide(state) {
      if (state.recommendMargin == -((products.length - 3) * 257)) {
        state.recommendMargin = 0;
      } else {
        state.recommendMargin = state.recommendMargin - 257;
      }
    },
  },
});

export default mainSliderSlice.reducer;
export const { goPrevNovSlide, goNextNovSlide, goPrevRecSlide, goNextRecSlide } = mainSliderSlice.actions;
