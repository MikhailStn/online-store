import "./App.scss";
import { MainPage } from "./pages/main/MainPage";
import { Page404 } from "./pages/404/Page404";
import { StorePage } from "./pages/shop/StorePage";
import { CartPage } from "./pages/cart/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/404" element={<Page404 />}></Route>
        <Route path="/store" element={<StorePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
