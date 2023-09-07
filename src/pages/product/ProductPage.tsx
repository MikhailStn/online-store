import "./ProductPage.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Product } from "../../types/product";

export function ProductPage(props: Product) {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="product__wrapper">
          <h2 className="product__title">{props.name}</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
