import "./mainRecommend.scss";
import { products } from "../../../data/products";
import { ProductCard } from "../../productCard/productCard";
import { Product } from "../../../types/product";

export function MainRecommend() {
  function shuffle(array: Product[]): Product[] {
    return array.sort(() => Math.random() - 0.5);
  }
  const shuffledProducts = shuffle(products);
  
  return (
    <div className="recommend">
      <div className="recommend__content">
        <div className="recommend__aside">
          <div className="recommend__aside_content">
            <h2 className="recommend__aside_title">we recommend</h2>
            <ul className="recommend__aside_list">
              <li className="recommend__aside_text">
                Future-Proof Features: Stay ahead of the curve with features that are designed for tomorrow's challenges. From AI-powered
                assistance to intuitive touch controls, our computers are built to adapt and evolve with your needs.
              </li>
              <li className="recommend__aside_text">
                Instant Connectivity: Stay connected with blazing-fast Wi-Fi and next-gen networking capabilities. Whether you're video
                conferencing, streaming, or online gaming, you'll experience a smooth and stable connection every time.
              </li>
            </ul>
            <div className="recommend__aside_buttons">
              <button className="recommend__aside_button">❮</button>
              <button className="recommend__aside_button">❯</button>
            </div>
          </div>
        </div>
        <div className="recommend__main">
          <div className="recommend__main_content">
            <div className="recommend__main_slider">
              {shuffledProducts.map((el) => (
                <ProductCard key={el.id} image={el.images[0]} name={el.name} price={el.price}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
