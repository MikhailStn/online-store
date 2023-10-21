import "./BlogPage.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";
import { setActiveBlog } from "../../store/headerNav";

export function BlogPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setActiveBlog());
  }, []);
  return (
    <div id="blog-page">
      <Header></Header>
      <main className="main">
        <div className="blog__wrapper">
          <div className="blog__content">
            <h2 className="blog__title main__title">blog</h2>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
