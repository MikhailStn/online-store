import { combineReducers, configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import headerNavSlice from "../store/headerNav";
import mainSliderSlice from "../store/mainSlider";
import cartListSlice from "../store/cartList";
import productsListSlice from "../store/productsList";
import filtersOptionsSlice from "../store/filtersOptions";
import storeListSlice from "../store/storeList";
import formValidationSlice from "../store/formValidation";

const rootReducer = combineReducers({
  headerNav: headerNavSlice,
  mainSlider: mainSliderSlice,
  cartList: cartListSlice,
  productList: productsListSlice,
  filtersOptions: filtersOptionsSlice,
  storeList: storeListSlice,
  formformValidation: formValidationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
