import "./ProductPage.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Product } from "../../types/product";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addProduct, removeProduct } from "../../store/cartList";
import { incrementQuantity, decrementQuantity } from "../../store/productsList";

export function ProductPage(props: Product) {
  const dispatch = useAppDispatch();
  const productsArray = useAppSelector((state) => state.cartList);

  const remove = () => {
    dispatch(removeProduct(props.id));
    dispatch(decrementQuantity(props.id));
  };

  const add = () => {
    dispatch(addProduct(props.id));
    dispatch(incrementQuantity(props.id));
  };

  return (
    <div>
      <Header />
      <main className="main">
        <div className="product__wrapper">
          <h2 className="product__title main__title">product</h2>
          <div className="product__content">
            <div className="product__carousel">
              <Carousel infiniteLoop showStatus={false} showIndicators={false}>
                {props.images.map((el) => {
                  return <img style={{ maxWidth: "400px" }} key={el} src={el}></img>;
                })}
              </Carousel>
            </div>
            <div className="product__info">
              <h2 className="product__info_name">{props.name}</h2>
              <h3 className="product__info_title">About product</h3>
              <p className="product__info_text">{props.description}</p>
              <h3 className="product__info_title">Configuration</h3>
              <p className="product__info_text">{props.configuration}</p>
              <div className="product__info_price_stock">
                <p className="product__info_sub">
                  Price:<span className="product__info_price">{props.price}$</span>
                </p>
                <p className="product__info_sub">
                  Stock:<span className="product__info_stock">{props.stock}</span>
                </p>
              </div>
              <Button
                variant="outlined"
                sx={{ margin: "20px 0" }}
                onClick={(e) => {
                  e.preventDefault();
                  productsArray.includes(props.id) ? remove() : add();
                }}
              >
                {productsArray.includes(props.id) ? "Remove from cart" : "Add to cart"}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
