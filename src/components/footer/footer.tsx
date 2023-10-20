import "./footer.scss";
import { Button } from "@mui/material";
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
      <div className="footer__content">
        <div className="footer__blocks">
          <div className="footer__block">
            <h2 className="footer__block_title">Company</h2>
            <ul className="footer__block_list">
              <li className="footer__block__li">
                <a className="footer__block_link">About us</a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link">News</a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link">Politics</a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <h2 className="footer__block_title">Information</h2>
            <ul className="footer__block_list">
              <li className="footer__block__li">
                <a className="footer__block_link">Help</a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link">Payment terms</a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link">Delivery terms</a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link">Exchange/Return</a>
              </li>
            </ul>
          </div>{" "}
          <div className="footer__block">
            <h2 className="footer__block_title">Help</h2>
            <ul className="footer__block_list">
              <li className="footer__block__li">
                <a className="footer__block_link">Blog</a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link">Brands</a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <h2 className="footer__block_title">Subscribe us</h2>
            <form className="footer__form">
              <input required type="email" name="email" className="footer__block_input" placeholder="E-mail"></input>
              <Button variant="outlined" className="footer__block_button" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
          <div className="footer__block">
            <h2 className="footer__block_title">Social Media</h2>
            <div className="footer__social">
              <a className="footer__social_link youtube" href="#"></a>
              <a className="footer__social_link telegram"></a>
              <a className="footer__social_link vk"></a>
            </div>
          </div>
        </div>
        <p className="footer__date">{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
