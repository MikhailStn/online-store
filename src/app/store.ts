import { combineReducers, configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import headerNavSlice from "../store/headerNav";
import mainSliderSlice from "../store/mainSlider";

const rootReducer = combineReducers({
  headerNav: headerNavSlice,
  mainSlider: mainSliderSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
