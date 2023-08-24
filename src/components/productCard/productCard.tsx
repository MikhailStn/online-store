import "./productCard.scss";
import { Button } from "@mui/material";

type Props = {
  image: string;
  name: string;
  price: number | string;
};

export function ProductCard(props: Props) {
  return (
    <div className="product-card">
      <img className="product-image" src={props.image}></img>
      <p className="product-name">{props.name}</p>
      <p className="product-price">{props.price} $</p>
      <Button variant="outlined">Add to cart</Button>
    </div>
  );
}
