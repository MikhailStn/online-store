import "./footer.scss";
// import { Link } from "react-router-dom";
// import { useAppDispatch } from "../../app/hooks";
// import { setActiveHome, setActiveStore, setActiveBlog } from "../../store/headerNav";

/* const nav = (
  <nav className="footer__nav">
    <ul className="footer__nav_ul">
      <li className="footer__nav_li">
        <Link to="/" className="footer__nav_link" onClick={() => dispatch(setActiveHome())}>
          Home
        </Link>
      </li>
      <li className="footer__nav_li">
        <Link to="/store" className="footer__nav_link" onClick={() => dispatch(setActiveStore())}>
          Store
        </Link>
      </li>
      <li className="footer__nav_li">
        <Link to="/blog" className="footer__nav_link" onClick={() => dispatch(setActiveBlog())}>
          Blog
        </Link>
      </li>
    </ul>
  </nav>
); */

export function Footer() {
  // const dispatch = useAppDispatch();

  return (
    <div className="footer">
      <div className="footer__content"></div>
    </div>
  );
}
