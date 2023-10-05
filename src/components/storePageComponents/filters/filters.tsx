import "./filters.scss";
import { Slider, Box } from "@mui/material";
import { useEffect } from "react";
import { products, brands } from "../../../data/products";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setFilter } from "../../../store/storeList";
import { setProductsVisibility } from "../../../store/storeList";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { setPrice, setStock, setBrands, setSearchValue } from "../../../store/filtersOptions";

export function Filters() {
  const dispatch = useAppDispatch();
  const price = useAppSelector((state) => state.filtersOptions.price);
  const stock = useAppSelector((state) => state.filtersOptions.stock);
  const activeBrands = useAppSelector((state) => state.filtersOptions.brands);
  const sortBy = useAppSelector((state) => state.filtersOptions.sortBy);
  const searchValue = useAppSelector((state) => state.filtersOptions.searchValue);

  const pricesArr: number[] = [];
  products.forEach((el) => pricesArr.push(el.price));
  const minPrice = () => pricesArr.reduce((x, y) => Math.min(x, y));
  const maxPrice = () => pricesArr.reduce((x, y) => Math.max(x, y));

  const stockArr: number[] = [];
  products.forEach((el) => stockArr.push(el.stock));
  const minStock = () => stockArr.reduce((x, y) => Math.min(x, y));
  const maxStock = () => stockArr.reduce((x, y) => Math.max(x, y));

  const handleChangePrice = (_event: Event, newValue: number | number[]) => {
    dispatch(setPrice(newValue as number[]));
  };

  const handleChangeStock = (_event: Event, newValue: number | number[]) => {
    dispatch(setStock(newValue as number[]));
  };

  const updateStore = () => {
    const sortedArray = [];
    switch (sortBy) {
      case "name":
        {
          const sortedByName = [...products].sort((a, b) => (a.name > b.name ? 1 : -1));
          for (let i = 0; i < sortedByName.length; i++) {
            if (
              sortedByName[i].price <= price[1] &&
              sortedByName[i].price >= price[0] &&
              sortedByName[i].stock <= stock[1] &&
              sortedByName[i].stock >= stock[0] &&
              activeBrands.includes(sortedByName[i].brand) &&
              sortedByName[i].name.includes(searchValue.toUpperCase())
            ) {
              sortedArray.push(sortedByName[i]);
            }
          }
        }
        break;

      case "price-asc":
        {
          const sortedByPriceAsc = [...products].sort((a, b) => (a.price > b.price ? 1 : -1));
          for (let i = 0; i < sortedByPriceAsc.length; i++) {
            if (
              sortedByPriceAsc[i].price <= price[1] &&
              sortedByPriceAsc[i].price >= price[0] &&
              sortedByPriceAsc[i].stock <= stock[1] &&
              sortedByPriceAsc[i].stock >= stock[0] &&
              activeBrands.includes(sortedByPriceAsc[i].brand) &&
              sortedByPriceAsc[i].name.includes(searchValue.toUpperCase())
            ) {
              sortedArray.push(sortedByPriceAsc[i]);
            }
          }
        }
        break;

      case "price-desc":
        {
          const sortedByPriceDesc = [...products].sort((a, b) => (a.price > b.price ? -1 : 1));
          for (let i = 0; i < sortedByPriceDesc.length; i++) {
            if (
              sortedByPriceDesc[i].price <= price[1] &&
              sortedByPriceDesc[i].price >= price[0] &&
              sortedByPriceDesc[i].stock <= stock[1] &&
              sortedByPriceDesc[i].stock >= stock[0] &&
              activeBrands.includes(sortedByPriceDesc[i].brand) &&
              sortedByPriceDesc[i].name.includes(searchValue.toUpperCase())
            ) {
              sortedArray.push(sortedByPriceDesc[i]);
            }
          }
        }
        break;

      case "stock-desc":
        {
          const sortedByStockDesc = [...products].sort((a, b) => (a.stock > b.stock ? -1 : 1));
          for (let i = 0; i < sortedByStockDesc.length; i++) {
            if (
              sortedByStockDesc[i].price <= price[1] &&
              sortedByStockDesc[i].price >= price[0] &&
              sortedByStockDesc[i].stock <= stock[1] &&
              sortedByStockDesc[i].stock >= stock[0] &&
              activeBrands.includes(sortedByStockDesc[i].brand) &&
              sortedByStockDesc[i].name.includes(searchValue.toUpperCase())
            ) {
              sortedArray.push(sortedByStockDesc[i]);
            }
          }
        }
        break;

      case "stock-asc":
        {
          const sortedByStockAsc = [...products].sort((a, b) => (a.stock > b.stock ? 1 : -1));
          for (let i = 0; i < sortedByStockAsc.length; i++) {
            if (
              sortedByStockAsc[i].price <= price[1] &&
              sortedByStockAsc[i].price >= price[0] &&
              sortedByStockAsc[i].stock <= stock[1] &&
              sortedByStockAsc[i].stock >= stock[0] &&
              activeBrands.includes(sortedByStockAsc[i].brand) &&
              sortedByStockAsc[i].name.includes(searchValue.toUpperCase())
            ) {
              sortedArray.push(sortedByStockAsc[i]);
            }
          }
        }
        break;
    }
    dispatch(setFilter(sortedArray));
    dispatch(setProductsVisibility());
  };

  useEffect(() => {
    updateStore();
  }, [price, stock, sortBy, searchValue, activeBrands]);

  return (
    <div className="filters">
      <p className="filters__sub">filters</p>
      <div className="filters__content">
        <div className="filters__visible">
          <TextField
            className="filters__search"
            variant="standard"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={searchValue}
            onChange={(e) => {
              dispatch(setSearchValue(e.target.value));
            }}
          ></TextField>
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
                  control={<Checkbox name="brand" onChange={() => dispatch(setBrands(el))} />}
                  label={el}
                  checked={activeBrands.includes(el) ? true : false}
                />
              );
            })}
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
