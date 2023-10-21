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
            <a className="footer__block_title" href="#">
              Company
            </a>
            <ul className="footer__block_list">
              <li className="footer__block__li">
                <a className="footer__block_link" href="#">
                  About us
                </a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link" href="#">
                  News
                </a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link" href="#">
                  Politics
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <a className="footer__block_title" href="#">
              Information
            </a>
            <ul className="footer__block_list">
              <li className="footer__block__li">
                <a className="footer__block_link" href="#">
                  Help
                </a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link" href="#">
                  Payment terms
                </a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link" href="#">
                  Delivery terms
                </a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link" href="#">
                  Exchange/Return
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="footer__block">
            <a className="footer__block_title" href="#">
              Help
            </a>
            <ul className="footer__block_list">
              <li className="footer__block__li">
                <a className="footer__block_link" href="#">
                  Blog
                </a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link" href="/store">
                  Brands
                </a>
              </li>
              <li className="footer__block__li">
                <a className="footer__block_link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <a className="footer__block_title" href="#">
              Subscribe us
            </a>
            <form className="footer__form">
              <input required type="email" name="email" className="footer__block_input" placeholder="E-mail" autoComplete="email"></input>
              <Button variant="outlined" className="footer__block_button" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
          <div className="footer__block">
            <a className="footer__block_title" href="#">
              Social Media
            </a>
            <div className="footer__social">
              <a className="footer__social_link youtube" href="#"></a>
              <a className="footer__social_link telegram" href="#"></a>
              <a className="footer__social_link vk" href="#"></a>
            </div>
          </div>
        </div>
        <p className="footer__date">{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
