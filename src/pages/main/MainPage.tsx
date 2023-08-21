import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { MainOverlay } from "../../components/mainOverlay/mainOverlay";

export function MainPage() {
  return (
    <div id="main-page">
      <Header />
      <main className="main">
        <MainOverlay />
      </main>
      <Footer />
    </div>
  );
}
