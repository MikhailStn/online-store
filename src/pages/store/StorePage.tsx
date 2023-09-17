import "./StorePage.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Filters } from "../../components/storePageComponents/filters/filters";
import { Products } from "../../components/storePageComponents/products/products";

export function StorePage() {
  return (
    <div id="store-page">
      <Header></Header>
      <main className="main">
        <div className="store__wrapper">
          <div className="store__content">
            <h2 className="store__title main__title">store</h2>
            <Filters />
            <Products />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
