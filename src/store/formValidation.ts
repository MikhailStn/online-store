import { createSlice } from "@reduxjs/toolkit";

const formValidationSlice = createSlice({
  name: "validation",
  initialState: {
    userInfo: {
      userName: "",
      userPhone: "",
      userCardNumber: "",
      userCardMonth: "",
      userCardYear: "",
      userCardCVV: "",
    },
  },
  reducers: {
    setUserName(state, action) {
      state.userInfo.userName = action.payload;
    },
    setUserPhone(state, action) {
      state.userInfo.userPhone = action.payload;
    },
    setUserCardNumber(state, action) {
      state.userInfo.userCardNumber = action.payload;
    },
    setUserCardCvv(state, action) {
      state.userInfo.userCardCVV = action.payload;
    },
    setUserCardMonth(state, action) {
      state.userInfo.userCardMonth = action.payload;
    },
    setUserCardYear(state, action) {
      state.userInfo.userCardYear = action.payload;
    },
    setDefault(state) {
      state.userInfo = { userName: "", userPhone: "", userCardNumber: "", userCardMonth: "", userCardYear: "", userCardCVV: "" };
    },
  },
});

export default formValidationSlice.reducer;
export const { setUserName, setUserPhone, setUserCardNumber, setUserCardCvv, setUserCardMonth, setUserCardYear, setDefault } =
  formValidationSlice.actions;
