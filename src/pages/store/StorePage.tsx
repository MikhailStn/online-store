import "./store.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Filters } from "../../components/storeComponents/filters/filters";
import { ProductsContainer } from "../../components/storeComponents/products/products";

export function StorePage() {
  return (
    <div id="store">
      <Header></Header>
      <main className="main">
        <div className="store__wrapper">
          <div className="store__content">
            <Filters />
            <ProductsContainer />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
