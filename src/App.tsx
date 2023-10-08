import "./App.scss";
import { MainPage } from "./pages/Main/MainPage";
import { Page404 } from "./pages/404/Page404";
import { StorePage } from "./pages/Store/StorePage";
import { CartPage } from "./pages/Cart/CartPage";
import { BlogPage } from "./pages/Blog/BlogPage";
import { ProductPage } from "./pages/Product/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { products } from "./data/products";

function App() {
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
                display={""}
              />
            }
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
