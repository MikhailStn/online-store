import "./CartPage.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Product } from "../../types/product";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changePath } from "../../store/productPath";
import { setNonActive } from "../../store/headerNav";
import { Form } from "../../components/form/form";
import { incrementQuantity, decrementQuantity, removeQuantity } from "../../store/productsList";
import { removeProduct } from "../../store/cartList";

export function CartPage() {
  const state = useAppSelector((state) => state.productPath);
  const products = useAppSelector((state) => state.productList);
  const items = useAppSelector((state) => state.cartList);
  const dispatch = useAppDispatch();
  const productsArray: Product[] = [];

  items.filter((el) => {
    products.forEach((it) => {
      it.id == el ? productsArray.push(it) : false;
    });
  });

  return (
    <div id="cart-page">
      <Header></Header>
      <main className="main">
        <div className="cart__wrapper">
          <div className="cart__content">
            <h2 className="cart__title main__title">cart</h2>
            {items.length == 0 ? (
              <div className="cart__empty">Cart is empty</div>
            ) : (
              <div className="cart__order_block">
                <div className="cart">
                  <div className="cart__titles">
                    <h4 className="cart__title_product">Product</h4>
                    <h4 className="cart__title_quantity">Quantity</h4>
                    <h4 className="cart__title_amount">Amount</h4>
                  </div>
                  <div className="cart__items">
                    {productsArray.map((el) => (
                      <div className="cart__item" key={el.id}>
                        <Link
                          className="cart__item_product"
                          to={state.path}
                          onMouseEnter={() => {
                            dispatch(changePath(el.name));
                          }}
                          onClick={() => {
                            dispatch(setNonActive());
                          }}
                        >
                          <img src={el.images[0]} width={100} style={{ padding: "10px" }}></img>
                          <p style={{ fontWeight: 600, fontSize: "16px" }}>{el.name}</p>
                        </Link>
                        <div className="cart__item_quantity">
                          <IconButton
                            className="cart__item_btn"
                            onClick={(e) => {
                              e.preventDefault();
                              if (el.quantity == 1) {
                                return;
                              } else {
                                dispatch(decrementQuantity(el.id));
                              }
                            }}
                          >
                            –
                          </IconButton>
                          <span className="cart__item_quantity">{el.quantity}</span>
                          <IconButton
                            className="cart__item_btn"
                            onClick={(e) => {
                              e.preventDefault();
                              if (el.quantity == el.stock) {
                                return;
                              } else {
                                dispatch(incrementQuantity(el.id));
                              }
                            }}
                          >
                            +
                          </IconButton>
                        </div>
                        <div className="cart__item_amount">
                          {el.price * el.quantity} $
                          <button
                            className="cart__item_button"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(removeProduct(el.id));
                              dispatch(removeQuantity(el.id));
                            }}
                          >
                            ✖
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Form />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
