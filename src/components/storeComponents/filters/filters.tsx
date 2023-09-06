import "./filters.scss";
import { Slider, Box } from "@mui/material";

export function Filters() {
  return (
    <div className="filters">
      <p>Filter by Price</p>
      <Box sx={{ maxWidth: "300px" }}>
        <Slider value={[1, 100]} />
      </Box>
      <p>Filter by Stock</p>
      <Box sx={{ maxWidth: "300px" }}>
        <Slider value={[1, 100]} />
      </Box>
    </div>
  );
}
