import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { MainOverlay } from "../../components/mainPage/mainOverlay/mainOverlay";
import { MainProducts } from "../../components/mainPage/mainProducts/mainProducts";
import { MainNovelties } from "../../components/mainPage/mainNovelties/mainNovelties";
import { MainRecommend } from "../../components/mainPage/mainRecommend/mainRecommend";

export function MainPage() {
  return (
    <div id="main-page">
      <Header />
      <main className="main">
        <MainOverlay />
        <MainProducts />
        <MainNovelties />
        <MainRecommend />
      </main>
      <Footer />
    </div>
  );
}
