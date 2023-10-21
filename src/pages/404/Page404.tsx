import "./Page404.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { setNonActive } from "../../store/headerNav";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";

export function Page404() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setNonActive());
  }, []);
  return (
    <div id="404">
      <Header></Header>
      <main className="main">
        <div className="not_found__wrapper"></div>
      </main>
      <Footer></Footer>
    </div>
  );
}
