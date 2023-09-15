import './BlogPage.scss'
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

export function BlogPage() {
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
