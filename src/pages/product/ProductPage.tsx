import "./ProductPage.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Product } from "../../types/product";
import { Carousel } from "react-responsive-carousel";

export function ProductPage(props: Product) {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="product__wrapper">
          <h2 className="product__title">{props.name}</h2>
          <div className="product__content">
            <div className="product__carousel">
              <Carousel infiniteLoop showStatus={false} showIndicators={false}>
                {props.images.map((el) => {
                  return <img style={{ maxWidth: "400px" }} key={el} src={el}></img>;
                })}
              </Carousel>
            </div>
            <div className="product__info">
              <h2 className="product__info_brand">{props.brand}</h2>
              <h3 className="product__info_title">About product</h3>
              <p className="product__info_text">{props.description}</p>
              <h3 className="product__info_title">Configuration</h3>
              <p className="product__info_text">{props.configuration}</p>
              <div className="product__info_price_stock">
                <p>
                  Price:<span className="product__info_price">{props.price}$</span>
                </p>
                <p>
                  Stock:<span className="product__info_stock">{props.stock}</span>
                </p>
              </div>
              <p>{props.price}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
