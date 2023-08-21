import "./header.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setActiveHome, setActiveStore } from "../../store/headerNavSlice";

export function Header() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.headerNav);
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
          </ul>
        </nav>
        <div className="header__search_container">
          <div className=""></div>
          <Link to="/cart"></Link>
        </div>
      </div>
    </div>
  );
}
