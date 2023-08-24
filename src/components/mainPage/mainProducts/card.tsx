import { Button } from "@mui/material";

type Props = {
  src: string;
  brand: string;
};

export function Card(props: Props) {
  return (
    <div className="products__card">
      <p className="products__brand">{props.brand}</p>
      <img src={props.src} className="products__image" alt="product"></img>
      <Button sx={{ marginTop: "20px" }} className="products__button" variant="outlined">
        View more
      </Button>
    </div>
  );
}
