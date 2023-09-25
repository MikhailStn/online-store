import "./products.scss";
import { ProductCard } from "../../productCard/productCard";
import { useAppSelector } from "../../../app/hooks";
import FormControl from "@mui/material/FormControl";
import { Select, Option } from "@mui/joy";
import { FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

export function Products() {
  const products = useAppSelector((state) => state.productList.prodList);

  return (
    <div className="items__wrapper">
      <div className="items__filters">
        <FormControl className="items__filters_view">
          <FormLabel className="items__filters_view_sub" id="view-radio-group">
            View:
          </FormLabel>
          <RadioGroup className="items__filters_radio_btns" name="controlled-view-radio-group">
            <FormControlLabel
              className="items__filters_radio items__filters_radio_active"
              value="column"
              control={<AppsIcon />}
              label={""}
            />
            <FormControlLabel
              className="items__filters_radio"
              value="list"
              control={<FormatListNumberedIcon />}
              label={""}
            />
          </RadioGroup>
        </FormControl>
        <p className="items__filters_counter">{products.length} products found</p>
        <Select className="items__filters_select" defaultValue="Name">
          <Option value="Name">Name</Option>
          <Option value="Price (ASC)">Price (ASC)</Option>
          <Option value="Price (DESC)">Price (DESC)</Option>
          <Option value="Stock (ASC)">Stock (ASC)</Option>
          <Option value="Stock (DESC)">Stock (DESC)</Option>
        </Select>
      </div>
      <div className="items">
        {products.length == 0 ? (
          <p className="items__sub">No items found</p>
        ) : (
          products.map((el) => {
            return <ProductCard key={el.id} image={el.images[0]} name={el.name} price={el.price} id={el.id} />;
          })
        )}
      </div>
    </div>
  );
}
