import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Overlay } from "../../components/mainPageComponents/overlay/overlay";
import { Products } from "../../components/mainPageComponents/products/products";
import { Novelties } from "../../components/mainPageComponents/novelties/novelties";
import { Recommend } from "../../components/mainPageComponents/recommend/recommend";

export function MainPage() {
  return (
    <div id="main-page">
      <Header />
      <main className="main">
        <Overlay />
        <Products />
        <Novelties />
        <Recommend />
      </main>
      <Footer />
    </div>
  );
}
