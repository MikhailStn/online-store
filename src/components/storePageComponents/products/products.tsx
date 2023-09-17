import "./products.scss";
import { products } from "../../../data/products";
import { ProductCard } from "../../productCard/productCard";

export function Products() {
  return (
    <div className="items">
      {products.map((el) => {
        return <ProductCard key={el.id} image={el.images[0]} name={el.name} price={el.price} id={el.id} />;
      })}
    </div>
  );
}