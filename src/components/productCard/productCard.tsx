import "./productCard.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changePath } from "../../store/productPath";
import { setNonActive } from "../../store/headerNav";
import { addProduct, removeProduct } from "../../store/cartList";
import { setQuantity, removeQuantity } from "../../store/productsList";

type Props = {
  image: string;
  name: string;
  price: number | string;
  id: string;
};

export function ProductCard(props: Props) {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.productPath);
  const productsArray = useAppSelector((state) => state.cartList);

  const remove = () => {
    dispatch(removeProduct(props.id));
    dispatch(removeQuantity(props.id));
  };

  const add = () => {
    dispatch(addProduct(props.id));
    dispatch(setQuantity(props.id));
  };

  return (
    <Link className="product__link" to={state.path}>
      <div
        className="product__card"
        onMouseEnter={() => {
          dispatch(changePath(props.name));
        }}
        onClick={() => {
          dispatch(setNonActive());
        }}
      >
        <img className="product__image" src={props.image}></img>
        <p className="product__name">{props.name}</p>
        <p className="product__price">{props.price} $</p>
        <Button
          variant="outlined"
          onClick={(e) => {
            e.preventDefault();
            productsArray.includes(props.id) ? remove() : add();
          }}
        >
          {productsArray.includes(props.id) ? "Remove from cart" : "Add to cart"}
        </Button>
      </div>
    </Link>
  );
}
