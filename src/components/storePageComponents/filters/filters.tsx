import "./filters.scss";
import { Slider, Box, Button } from "@mui/material";
import { useState } from "react";
import { products } from "../../../data/products";

export function Filters() {
  const [areFiltersVisible, setFiltersVisibility] = useState(false);
  const [filterBtn, setFilterBtn] = useState("filters ▼");
  const [filtersClassname, setFiltersClassname] = useState("filters__hidden");

  const prices: number[] = [];
  products.forEach((el) => prices.push(el.price));
  const minPrice = () => prices.reduce((x, y) => Math.min(x, y));
  const maxPrice = () => prices.reduce((x, y) => Math.max(x, y));

  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const changeVisibility = () => {
    if (areFiltersVisible) {
      setFiltersVisibility(false);
      setFilterBtn("filters ▼");
      setFiltersClassname("filters__hidden");
    } else {
      setFiltersVisibility(true);
      setFilterBtn("filters ▲");
      setFiltersClassname("filters__hidden filters__visible");
    }
  };

  return (
    <div className="filters">
      <Button sx={{ textAlign: "start", padding: "0", height: "40px" }} variant="text" onClick={changeVisibility}>
        {filterBtn}
      </Button>
      <div className="filters__content">
        <div className={filtersClassname}>
          <p>Price</p>
          <Box sx={{ maxWidth: "300px", marginLeft: "25px" }}>
            <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" />
          </Box>
          <p>Stock</p>
          <Box sx={{ maxWidth: "300px", marginLeft: "25px" }}>
            <Slider value={[1, 100]} />
          </Box>
        </div>
      </div>
    </div>
  );
}
