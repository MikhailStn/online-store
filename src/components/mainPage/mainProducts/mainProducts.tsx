import "./mainProducts.scss";
import { Card } from "./card";
import image_1 from "../../../assets/images/products/hp_005/0.png";
import image_2 from "../../../assets/images/products/rage_h301/0.jpg";
import image_3 from "../../../assets/images/products/lyambda_frontier/0.jpg";

export function MainProducts() {
  return (
    <div className="products">
      <div className="products__content">
        <Card src={image_1} brand="HP" />
        <Card src={image_2} brand="ARDOR" />
        <Card src={image_3} brand="LYAMBDA" />
      </div>
    </div>
  );
}
