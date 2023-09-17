import "./App.scss";
import { MainPage } from "./pages/Main/MainPage";
import { Page404 } from "./pages/404/Page404";
import { StorePage } from "./pages/Store/StorePage";
import { CartPage } from "./pages/Cart/CartPage";
import { BlogPage } from "./pages/Blog/BlogPage";
import { ProductPage } from "./pages/Product/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { useEffect } from "react";
import { changePath } from "./store/productPath";
import { setActiveHome, setActiveStore, setActiveBlog, setActiveCart, setNonActive } from "./store/headerNav";

function App() {
  const state = useAppSelector((state) => state.productPath);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("curr-product")) dispatch(changePath(localStorage.getItem("curr-product")));
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
        <Route
          path={"/" + state.path}
          element={
            <ProductPage
              id={state.id}
              name={state.name}
              description={state.description}
              configuration={state.configuration}
              brand={state.brand}
              price={state.price}
              stock={state.stock}
              images={state.images}
              quantity={0}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
