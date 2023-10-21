import "./header.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setActiveCart, setActiveHome, setActiveStore, setActiveBlog } from "../../store/headerNav";
import { IconButton } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useEffect, useState } from "react";
import { MenuStyle } from "../../types/types";

const closedMenu: MenuStyle = {
  line1: { transform: "rotate(0deg)" },
  line2: { opacity: "1", left: "0px", marginTop: "12px" },
  line3: { transform: "rotate(0deg)", marginTop: "-13.5px" },
  headerMenu: {
    marginTop: "-600px",
  },
  headerOverlay: { opacity: "0", visibility: "hidden" },
  headerButton: { marginTop: "-5px" },
};

const openedMenu: MenuStyle = {
  line1: { transform: "rotate(45deg)" },
  line2: { opacity: "0", left: "-60px" },
  line3: { transform: "rotate(135deg)", marginTop: "-13px" },
  headerMenu: {
    marginTop: "0",
  },
  headerOverlay: { opacity: "1", visibility: "visible" },
  headerButton: { marginTop: "5px" },
};

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

  const [menuStyles, setMenuStyles] = useState(closedMenu);
  const [isOpen, setIsOpen] = useState(false);

  const showBurger = () => {
    setIsOpen(true);
    setMenuStyles(openedMenu);
  };

  const hideBurger = () => {
    setIsOpen(false);
    setMenuStyles(closedMenu);
  };

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content_btn_wrap mobile__content_767">
          <button
            className="header__menu_btn mobile__content_767"
            style={menuStyles.headerButton}
            onClick={() => {
              isOpen ? hideBurger() : showBurger();
            }}
          >
            <span className="header__menu_line line1" style={menuStyles.line1}></span>
            <span className="header__menu_line line2" style={menuStyles.line2}></span>
            <span className="header__menu_line line3" style={menuStyles.line3}></span>
          </button>
        </div>
        <span
          className="header__menu_overlay mobile__content_767"
          style={menuStyles.headerOverlay}
          onClick={() => {
            hideBurger();
          }}
        ></span>
        <div className="header__menu mobile__content_767" style={menuStyles.headerMenu}>
          <nav className="header__menu_nav">
            <ul className="header__menu_nav_list">
              <li className="header__menu_li">
                <Link to="/" className={state.classNameHome} onClick={() => dispatch(setActiveHome())}>
                  Home
                </Link>
              </li>
              <li className="header__menu_li">
                <Link to="/store" className={state.classNameStore} onClick={() => dispatch(setActiveStore())}>
                  Store
                </Link>
              </li>
              <li className="header__menu_li" style={{ display: "none" }}>
                <Link to="/blog" className={state.classNameBlog} onClick={() => dispatch(setActiveBlog())}>
                  Blog
                </Link>
              </li>
            </ul>
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
            <li className="header__nav_li" style={{ display: "none" }}>
              <Link to="/blog" className={state.classNameBlog} onClick={() => dispatch(setActiveBlog())}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/" className="header__logo">
          Online Store
        </Link>
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
