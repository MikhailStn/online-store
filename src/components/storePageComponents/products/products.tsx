import "./products.scss";
import { ProductCard } from "../../productCard/productCard";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { Select, Option } from "@mui/joy";
import { setSortBy } from "../../../store/filtersOptions";
import { useEffect, useState } from "react";

export function Products() {
  const products = useAppSelector((state) => state.storeList.prodList);
  const currentSortBy = useAppSelector((state) => state.filtersOptions.sortBy);
  const dispatch = useAppDispatch();

  const [currentSort, setCurrentSort] = useState("Name (A-Z)");

  const changeCurrentSort = () => {
    switch (currentSortBy) {
      case "name":
        {
          setCurrentSort("Name (A-Z)");
        }
        break;
      case "price-asc":
        {
          setCurrentSort("Price (ASC)");
        }
        break;
      case "price-desc":
        {
          setCurrentSort("Price (DESC)");
        }
        break;

      case "stock-asc":
        {
          setCurrentSort("Stock (Less - More)");
        }
        break;
      case "stock-desc":
        {
          setCurrentSort("Stock (More - Less)");
        }
        break;
    }
  };

  useEffect(() => {
    changeCurrentSort();
  }, [currentSortBy]);

  return (
    <div className="items__wrapper">
      <div className="items__filters">
        <p className="items__filters_counter">{products.length} products found</p>
        <Select className="items__filters_select" value={currentSort} name="sort">
          <Option className="items__filters_Option" id="sort-Option" value="Sort by" disabled>
            Sort by:
          </Option>
          <Option
            value="Name (A-Z)"
            id="name"
            onClick={() => {
              dispatch(setSortBy("name"));
            }}
          >
            Name (A-Z)
          </Option>
          <Option
            value="Price (ASC)"
            id="price-asc"
            onClick={() => {
              dispatch(setSortBy("price-asc"));
            }}
          >
            Price (ASC)
          </Option>
          <Option
            value="Price (DESC)"
            id="price-desc"
            onClick={() => {
              dispatch(setSortBy("price-desc"));
            }}
          >
            Price (DESC)
          </Option>
          <Option
            value="Stock (More - Less)"
            id="stock-asc"
            onClick={() => {
              dispatch(setSortBy("stock-desc"));
            }}
          >
            Stock (More - Less)
          </Option>
          <Option
            value="Stock (Less - More)"
            id="stock-desc"
            onClick={() => {
              dispatch(setSortBy("stock-asc"));
            }}
          >
            Stock (Less - More)
          </Option>
        </Select>
      </div>
      <div className="items">
        {products.map((el) => {
          return (
            <ProductCard
              key={el.id}
              image={el.images[0]}
              name={el.name}
              price={el.price}
              id={el.id}
              stock={el.stock}
              style={{ display: `${el.display}` }}
            />
          );
        })}
      </div>
    </div>
  );
}
