import "./form.scss";
import { Input, Button } from "@mui/material";
import { useAppSelector } from "../../app/hooks";

export function Form() {
  const prods = useAppSelector((state) => state.productList.prodList);
  const summ = prods.reduce((acc, el) => {
    const summ = acc + el.quantity * el.price;
    return summ;
  }, 0);
  return (
    <form className="form">
      <p className="form__sub">Name</p>
      <Input autoComplete="name" name="name" className="form__input" placeholder="Enter your name"></Input>
      <p className="form__error"></p>
      <p className="form__sub">Phone</p>
      <Input autoComplete="phone" name="phone" className="form__input" placeholder="Enter your phone"></Input>
      <p className="form__error"></p>
      <p className="form__sub">Payment information</p>
      <div className="form__card">
        <p className="form__card_sub">Card number:</p>
        <input name="card-number" className="form__card_number" placeholder="0000 0000 0000 0000"></input>
        <p className="form__error"></p>
        <div className="form__card_cvv_block">
          <p className="form__card_sub">CVV:</p>
          <input name="card-cvv" className="form__card_cvv" placeholder="000"></input>
        </div>
        <p className="form__error"></p>
        <div className="form__card_expires">
          <p className="form__card_sub">Expiration date:</p>
          <input name="card-num" className="form__card_month" placeholder="00"></input>
          <input name="card-year" className="form__card_year" placeholder="0000"></input>
        </div>
        <p className="form__error"></p>
      </div>
      <div className="form__total">
        <span className="form__total_sub">Total:</span>
        <span className="form__total_amount">{summ} $</span>
      </div>
      <Button variant="outlined">Order</Button>
    </form>
  );
}
