import "./CartPage.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { useAppSelector } from "../../app/hooks";
import { products } from "../../data/products";
import { Product } from "../../types/product";

export function CartPage() {
  const items = useAppSelector((state) => state.cartList);
  const productsArray: Product[] = [];

  items.filter((el) => {
    products.forEach((it) => {
      it.id == el ? productsArray.push(it) : false;
    });
  });

  console.log(productsArray);
  return (
    <div id="cart-page">
      <Header></Header>
      <main className="main">
        <div className="cart__wrapper">
          <div className="cart__content">
            <h2 className="cart__title main__title">cart</h2>
            <div className="cart">
              <div className="cart__titles">
                <h4>Product</h4>
                <h4>Quantity</h4>
                <h4>Amount</h4>
              </div>
              <div className="cart__items"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
