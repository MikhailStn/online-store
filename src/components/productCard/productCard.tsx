import "./productCard.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setNonActive } from "../../store/headerNav";
import { addProduct, removeProduct } from "../../store/cartList";
import { setQuantity, removeQuantity } from "../../store/productsList";

type Props = {
  image: string;
  name: string;
  price: number | string;
  id: string;
  stock: number;
};

export function ProductCard(props: Props) {
  const dispatch = useAppDispatch();
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
    <Link className="product__link" to={"/store/" + props.name}>
      <div
        className="product__card"
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
            e.stopPropagation();
            productsArray.includes(props.id) ? remove() : add();
          }}
        >
          {productsArray.includes(props.id) ? "Remove from cart" : "Add to cart"}
        </Button>
        <span className="product__stock">Stock: {props.stock}</span>
      </div>
    </Link>
  );
}
