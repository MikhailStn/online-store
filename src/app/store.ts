import { combineReducers, configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import headerNavSlice from "../store/headerNav";
import mainSliderSlice from "../store/mainSlider";
import productPathSlice from "../store/productPath";
import cartListSlice from "../store/cartList";
import productsList from "../store/productsList";

const rootReducer = combineReducers({
  headerNav: headerNavSlice,
  mainSlider: mainSliderSlice,
  productPath: productPathSlice,
  cartList: cartListSlice,
  productList: productsList,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
