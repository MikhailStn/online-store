import "./mainNovelties.scss";
import { ProductCard } from "../../productCard/productCard";
import { products } from "../../../data/products";
import { Product } from "../../../types/product";

export function MainNovelties() {
  function shuffle(array: Product[]): Product[] {
    return array.sort(() => Math.random() - 0.5);
  }
  const shuffledProducts = shuffle(products);

  return (
    <div className="novelties">
      <div className="novelties__content">
        <div className="novelties__aside">
          <div className="novelties__aside_content">
            <h2 className="novelties__aside_title">what's new</h2>
            <ul className="novelties__aside_list">
              <li className="novelties__aside_text">
                Lightning-Fast Performance: Say goodbye to lag and hello to seamless multitasking. Our cutting-edge computers boast
                lightning-fast processors that effortlessly handle even the most demanding tasks, so you can power through your work and
                play without missing a beat.
              </li>
              <li className="novelties__aside_text">
                Stunning Visuals: Immerse yourself in a world of vibrant colors and crystal-clear graphics. The latest graphics technology
                brings your games, movies, and creative projects to life with jaw-dropping realism.
              </li>
            </ul>
            <div className="novelties__aside_buttons">
              <button className="novelties__aside_button">❮</button>
              <button className="novelties__aside_button">❯</button>
            </div>
          </div>
        </div>
        <div className="novelties__main">
          <div className="novelties__main_content">
            <div className="novelties__main_slider">
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
