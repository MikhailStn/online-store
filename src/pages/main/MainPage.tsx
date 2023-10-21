import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Overlay } from "../../components/mainPageComponents/overlay/overlay";
import { Products } from "../../components/mainPageComponents/products/products";
import { Novelties } from "../../components/mainPageComponents/novelties/novelties";
import { Recommend } from "../../components/mainPageComponents/recommend/recommend";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setActiveHome } from "../../store/headerNav";

export function MainPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setActiveHome());
  }, []);
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
