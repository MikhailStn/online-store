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
        <div className="header__content_btn_wrap mobile__content_767">
          <button className="header__menu_btn mobile__content_767">
            <svg id="hamburger" className="header__toggle_svg" viewBox="0 0 60 40">
              <g stroke="#1976d2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path id="top-line" d="M10,10 L50,10 Z"></path>
                <path id="middle-line" d="M10,20 L50,20 Z"></path>
                <path id="bottom-line" d="M10,30 L50,30 Z"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="header__menu mobile__content_767">
          <nav className="header__menu_nav">
            <li className="header__menu_li">
              <Link to="/" className={state.classNameHome} id="header__menu_link" onClick={() => dispatch(setActiveHome())}>
                Home
              </Link>
            </li>
            <li className="header__menu_li">
              <Link to="/store" className={state.classNameStore} id="header__menu_link" onClick={() => dispatch(setActiveStore())}>
                Store
              </Link>
            </li>
            <li className="header__menu_li">
              <Link to="/blog" className={state.classNameBlog} id="header__menu_link" onClick={() => dispatch(setActiveBlog())}>
                Blog
              </Link>
            </li>
          </nav>
        </div>
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
