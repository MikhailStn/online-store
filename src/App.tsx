import "./App.scss";
import { MainPage } from "./pages/Main/MainPage";
import { Page404 } from "./pages/404/Page404";
import { StorePage } from "./pages/Store/StorePage";
import { CartPage } from "./pages/Cart/CartPage";
import { BlogPage } from "./pages/Blog/BlogPage";
import { ProductPage } from "./pages/Product/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";
import { useEffect } from "react";
import { setActiveHome, setActiveStore, setActiveBlog, setActiveCart, setNonActive } from "./store/headerNav";
import { products } from "./data/products";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname == "/store") {
      dispatch(setActiveStore());
    } else if (location.pathname == "/blog") {
      dispatch(setActiveBlog());
    } else if (location.pathname == "/cart") {
      dispatch(setActiveCart());
    } else if (location.pathname == "/") {
      dispatch(setActiveHome());
    } else {
      dispatch(setNonActive());
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/404" element={<Page404 />}></Route>
        <Route path="/store" element={<StorePage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        {products.map((el) => (
          <Route
            key={el.id}
            path={"/store/" + el.name}
            element={
              <ProductPage
                id={el.id}
                name={el.name}
                description={el.description}
                configuration={el.configuration}
                brand={el.brand}
                price={el.price}
                stock={el.stock}
                images={el.images}
                quantity={el.quantity}
              />
            }
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
