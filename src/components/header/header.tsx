import "./header.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setActiveCart, setActiveHome, setActiveStore, setActiveBlog } from "../../store/headerNav";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export function Header() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.headerNav);
  const products = useAppSelector((state) => state.cartList);
  return (
    <div className="header">
      <div className="header__content">
        <nav className="header__nav">
          <ul className="header__nav_ul">
            <li className="header__nav_li">
              <Link to="/" className={state.classNameHome} onClick={() => dispatch(setActiveHome())}>
                Home
              </Link>
            </li>
            <li className="header__nav_li">
              <Link to="/store" className={state.classNameStore} onClick={() => dispatch(setActiveStore())}>
                Store
              </Link>
            </li>
            <li className="header__nav_li">
              <Link to="/blog" className={state.classNameBlog} onClick={() => dispatch(setActiveBlog())}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <p className="header__logo">Online Store</p>
        <div className="header__search_container">
          <TextField
            variant="standard"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <Link className={state.classNameCart} to="/cart" onClick={() => dispatch(setActiveCart())}>
            <IconButton style={{ width: "100%", height: "100%" }}>
              <ShoppingBagIcon style={{ width: "100px", height: "100%" }}></ShoppingBagIcon>
              <span className="header__cart_counter">{products.length}</span>
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
