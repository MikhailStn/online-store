import "./form.scss";
import { Input, Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { CSSProperties, useState } from "react";

import {
  setUserName,
  setUserPhone,
  setUserCardNumber,
  setUserCardMonth,
  setUserCardYear,
  setUserCardCvv,
  setDefault,
} from "../../store/formValidation";

const errStyle: CSSProperties = {
  opacity: "0",
  visibility: "hidden",
};

const popup: CSSProperties = {
  opacity: "0",
  visibility: "hidden",
  transform: "scale(0.7)",
};

export function Form() {
  const dispatch = useAppDispatch();
  const prods = useAppSelector((state) => state.productList.prodList);
  const userInfo = useAppSelector((state) => state.formformValidation.userInfo);
  const summ = prods.reduce((acc, el) => {
    const summ = acc + el.quantity * el.price;
    return summ;
  }, 0);

  const [inputNameStyle, setInputNameStyle] = useState({});
  const [inputPhoneStyle, setInputPhoneStyle] = useState({});
  const [inputCardStyle, setInputCardStyle] = useState({});
  const [inputCvvStyle, setInputCvvStyle] = useState({});
  const [inputMonthStyle, setInputMonthStyle] = useState({});
  const [inputYearStyle, setInputYearStyle] = useState({});
  const [formErr, setFormErr] = useState(errStyle);
  const [formPopup, setPopup] = useState(popup);
  const [overlay, setOverlay] = useState(errStyle);

  const validateName = (val: string) => {
    if (val.length < 4 && val.length > 0) {
      setInputNameStyle({ color: "#e11111" });
    } else {
      setInputNameStyle({ color: "#000" });
      if (val.length != 0) {
        return true;
      }
    }
    return false;
  };

  const validatePhone = (val: string) => {
    if (val.length < 7 && val.length > 0) {
      setInputPhoneStyle({ color: "#e11111" });
    } else {
      setInputPhoneStyle({ color: "#000" });
      if (val.length != 0) {
        return true;
      }
    }
    return false;
  };

  const validateCardNumber = (val: string) => {
    if (val.length != 16 && val.length != 0) {
      setInputCardStyle({ color: "#e11111", border: "1px solid rgb(255 0 0)" });
    } else {
      setInputCardStyle({ color: "#000" });
      if (val.length != 0) {
        return true;
      }
    }
    return false;
  };

  const validateCardCVV = (val: string) => {
    if (val.length != 3 && val.length != 0) {
      setInputCvvStyle({ color: "#e11111", border: "1px solid rgb(255 0 0)" });
    } else {
      setInputCvvStyle({ color: "#000" });
      if (val.length != 0) {
        return true;
      }
    }
    return false;
  };

  const validateCardMonth = (val: string) => {
    if ((val.length != 2 && val.length != 0) || Number(val) > 12 || String(val) == "00") {
      setInputMonthStyle({ color: "#e11111", border: "1px solid rgb(255 0 0)" });
    } else {
      setInputMonthStyle({ color: "#000" });
      if (val.length != 0) {
        return true;
      }
    }
    return false;
  };

  const validateCardYear = (val: string) => {
    if ((val.length != 4 && val.length != 0) || Number(val) < new Date().getFullYear()) {
      setInputYearStyle({ color: "#e11111", border: "1px solid rgb(255 0 0)" });
    } else {
      setInputYearStyle({ color: "#000" });
      if (val.length != 0) {
        return true;
      }
    }
    return false;
  };

  const validateForm = () => {
    if (
      validateName(userInfo.userName) &&
      validatePhone(userInfo.userPhone) &&
      validateCardNumber(userInfo.userCardNumber) &&
      validateCardCVV(userInfo.userCardCVV) &&
      validateCardMonth(userInfo.userCardMonth) &&
      validateCardYear(userInfo.userCardYear)
    ) {
      console.log("true");
      setFormErr({ opacity: "0", visibility: "hidden" });
      setOverlay({ opacity: "1", visibility: "visible" });
      setPopup({ opacity: "1", visibility: "visible", transform: "scale(1)" });
      setTimeout(() => {
        setPopup(popup);
        setOverlay(formErr);
      }, 2000);
      dispatch(setDefault());
    } else {
      setFormErr({ opacity: "1", visibility: "visible" });
      console.log("false");
    }
  };

  return (
    <form className="form">
      <div className="form__overlay" style={overlay}>
        <div className="form__popup" style={formPopup}>
          <p className="form__popup_sub">The order has been created</p>
          <p className="form__popup_sub_success">✔</p>
        </div>
      </div>
      <p className="form__sub">Name</p>
      <Input
        autoComplete="name"
        name="name"
        type="text"
        className="form__input"
        placeholder="Enter your name"
        value={userInfo.userName}
        onChange={(e) => {
          dispatch(setUserName(e.target.value));
          validateName(e.target.value);
        }}
        style={inputNameStyle}
      ></Input>
      <p className="form__error"></p>
      <p className="form__sub">Phone</p>
      <Input
        autoComplete="phone"
        name="phone"
        type="number"
        className="form__input"
        placeholder="Enter your phone"
        value={userInfo.userPhone}
        onChange={(e) => {
          dispatch(setUserPhone(e.target.value));
          validatePhone(e.target.value);
        }}
        style={inputPhoneStyle}
      ></Input>
      <p className="form__error"></p>
      <p className="form__sub">Payment information</p>
      <div className="form__card">
        <p className="form__card_sub">Card number:</p>
        <input
          name="card-number"
          className="form__card_number"
          type="number"
          placeholder="0000 0000 0000 0000"
          value={userInfo.userCardNumber}
          onChange={(e) => {
            dispatch(setUserCardNumber(e.target.value));
            validateCardNumber(e.target.value);
          }}
          style={inputCardStyle}
        ></input>
        <p className="form__error"></p>
        <div className="form__card_cvv_block">
          <p className="form__card_sub">CVV:</p>
          <input
            name="card-cvv"
            className="form__card_cvv"
            placeholder="000"
            value={userInfo.userCardCVV}
            onChange={(e) => {
              dispatch(setUserCardCvv(e.target.value));
              validateCardCVV(e.target.value);
            }}
            style={inputCvvStyle}
          ></input>
        </div>
        <p className="form__error"></p>
        <div className="form__card_expires">
          <p className="form__card_sub">Expiration date:</p>
          <input
            name="card-num"
            className="form__card_month"
            type="number"
            placeholder="00"
            value={userInfo.userCardMonth}
            onChange={(e) => {
              dispatch(setUserCardMonth(e.target.value));
              validateCardMonth(e.target.value);
            }}
            style={inputMonthStyle}
          ></input>
          <input
            name="card-year"
            className="form__card_year"
            type="number"
            placeholder="0000"
            value={userInfo.userCardYear}
            onChange={(e) => {
              dispatch(setUserCardYear(e.target.value));
              validateCardYear(e.target.value);
            }}
            style={inputYearStyle}
          ></input>
        </div>
        <p className="form__error"></p>
      </div>
      <div className="form__total">
        <span className="form__total_sub">Total:</span>
        <span className="form__total_amount">{summ} $</span>
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          validateForm();
        }}
      >
        Order
      </Button>
      <p className="form__error" style={formErr}>
        Enter the correct data
      </p>
    </form>
  );
}
