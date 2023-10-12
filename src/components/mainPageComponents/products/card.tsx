import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { setSearchValue } from "../../../store/filtersOptions";
import { useAppDispatch } from "../../../app/hooks";

type Props = {
  src: string;
  brand: string;
};

export function Card(props: Props) {
  const dispatch = useAppDispatch();
  return (
    <Link
      to="/store"
      className="products__card"
      onClick={() => {
        dispatch(setSearchValue(props.brand));
      }}
    >
      <p className="products__brand">{props.brand}</p>
      <img src={props.src} className="products__image" alt="product"></img>
      <Button sx={{ marginTop: "20px" }} className="products__button" variant="outlined">
        View more
      </Button>
    </Link>
  );
}
