import { useState } from "react";
import "./filters.scss";
import { Slider, Box, Button } from "@mui/material";

export function Filters() {
  const [areFiltersVisible, setFiltersVisibility] = useState(false);
  const [filterBtn, setFilterBtn] = useState("filters ▼");
  const [filtersClassname, setFiltersClassname] = useState("filters__hidden");

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
          <Box sx={{ maxWidth: "300px", marginLeft: "15px" }}>
            <Slider value={[1, 100]} />
          </Box>
          <p>Stock</p>
          <Box sx={{ maxWidth: "300px", marginLeft: "15px" }}>
            <Slider value={[1, 100]} />
          </Box>
        </div>
      </div>
    </div>
  );
}
