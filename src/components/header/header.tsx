import "./header.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setActiveCart, setActiveHome, setActiveStore, setActiveBlog } from "../../store/headerNav";
import { IconButton } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useEffect, useState } from "react";

export function Header() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.headerNav);
  const cartList = useAppSelector((state) => state.productList.prodList);
  const [commonQuantity, setcommonQuantity] = useState(0);
  let quantities: number[] = [];

  useEffect(() => {
    cartList.forEach((el) => quantities.push(el.quantity));
    setcommonQuantity(quantities.reduce((x, y) => x + y));
  }, [cartList]);

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
          <Link className={state.classNameCart} to="/cart" onClick={() => dispatch(setActiveCart())}>
            <IconButton style={{ width: "100%", height: "100%" }}>
              <ShoppingBagIcon style={{ width: "100px", height: "100%" }}></ShoppingBagIcon>
              <span className="header__cart_counter">{commonQuantity}</span>
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
