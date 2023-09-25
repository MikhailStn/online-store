import "./filters.scss";
import { Slider, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { products, brands } from "../../../data/products";
import { useAppDispatch } from "../../../app/hooks";
import { setFilter } from "../../../store/productsList";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const currBrands = brands.slice(0);

export function Filters() {
  const dispatch = useAppDispatch();

  const pricesArr: number[] = [];
  products.forEach((el) => pricesArr.push(el.price));
  const minPrice = () => pricesArr.reduce((x, y) => Math.min(x, y));
  const maxPrice = () => pricesArr.reduce((x, y) => Math.max(x, y));
  const [price, setPrice] = useState<number[]>([minPrice(), maxPrice()]);

  const stockArr: number[] = [];
  products.forEach((el) => stockArr.push(el.stock));
  const minStock = () => stockArr.reduce((x, y) => Math.min(x, y));
  const maxStock = () => stockArr.reduce((x, y) => Math.max(x, y));
  const [stock, setStock] = useState<number[]>([minStock(), maxStock()]);

  const handleChangePrice = (_event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const handleChangeStock = (_event: Event, newValue: number | number[]) => {
    setStock(newValue as number[]);
  };

  const updateStore = () => {
    const sortedArray = [];
    for (let i = 0; i < products.length; i++) {
      if (
        products[i].price <= price[1] &&
        products[i].price >= price[0] &&
        products[i].stock <= stock[1] &&
        products[i].stock >= stock[0] &&
        currBrands.includes(products[i].brand)
      ) {
        sortedArray.push(products[i]);
      }
    }
    dispatch(setFilter(sortedArray));
  };

  useEffect(() => {
    updateStore();
  }, [price, stock]);

  const addBrand = (el: string) => {
    currBrands.push(el);
    updateStore();
  };

  const removeBrand = (el: string) => {
    const i = currBrands.indexOf(el);
    currBrands.splice(i, 1);
    updateStore();
  };

  return (
    <div className="filters">
      <p className="filters__sub">filters</p>
      <div className="filters__content">
        <div className="filters__visible">
          <p>Price</p>
          <Box sx={{ maxWidth: "300px", marginLeft: "25px", width: "80%" }}>
            <Slider
              max={maxPrice()}
              min={minPrice()}
              value={price}
              onChange={handleChangePrice}
              valueLabelDisplay="auto"
            />
          </Box>
          <p>Stock</p>
          <Box sx={{ maxWidth: "300px", marginLeft: "25px", width: "80%" }}>
            <Slider
              max={maxStock()}
              min={minStock()}
              value={stock}
              onChange={handleChangeStock}
              valueLabelDisplay="auto"
            />
          </Box>
          <p>Brands</p>
          <FormGroup sx={{ paddingLeft: "15px" }}>
            {brands.map((el) => {
              return (
                <FormControlLabel
                  key={el}
                  control={
                    <Checkbox
                      defaultChecked
                      onChange={(e) => {
                        e.target.checked ? addBrand(el) : removeBrand(el);
                      }}
                    />
                  }
                  label={el}
                />
              );
            })}
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
