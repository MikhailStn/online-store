import "./StorePage.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Filters } from "../../components/storePageComponents/filters/filters";
import { Products } from "../../components/storePageComponents/products/products";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setProductsVisibility, incrementPage, decrementPage, setPage } from "../../store/storeList";
import { useEffect, useState } from "react";
import { setActiveStore } from "../../store/headerNav";

export function StorePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setActiveStore());
  }, []);

  const products = useAppSelector((state) => state.storeList.prodList);
  const currentPage = useAppSelector((state) => state.storeList.pageNumber);
  const [pagesArr, setPagesArray] = useState([] as number[]);
  const [visiblePagination, setVisibility] = useState({ display: "flex" });

  useEffect(() => {
    let pagesNum = 0;
    if (products.length == 0) {
      setVisibility({ display: "none" });
      return;
    } else if (products.length <= 6) {
      pagesNum = 1;
      setVisibility({ display: "flex" });
    } else {
      if (products.length % 6 == 0) {
        pagesNum = products.length / 6;
        setVisibility({ display: "flex" });
      } else {
        pagesNum = Math.floor(products.length / 6) + 1;
        setVisibility({ display: "flex" });
      }
    }
    let i = 1;
    const newArr: number[] = [];
    while (i <= pagesNum) {
      newArr.push(i);
      i++;
    }
    setPagesArray(newArr);
    dispatch(setProductsVisibility());
  }, [products]);

  const [filtersDisplay, setFiltersDisplay] = useState(window.innerWidth > 1279 ? "flex" : "none");

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1279) {
      setFiltersDisplay("flex");
    }
  });

  return (
    <div id="store-page">
      <Header></Header>
      <main className="main">
        <div className="store__wrapper">
          <h2 className="store__title main__title">store</h2>
          <div className="store__content">
            <button
              className={
                filtersDisplay == "none"
                  ? "store__btn_show mobile__content_1279"
                  : "store__btn_show store__btn_show_active mobile__content_1279"
              }
              onClick={() => {
                filtersDisplay == "none" ? setFiltersDisplay("flex") : setFiltersDisplay("none");
              }}
            >
              {filtersDisplay == "none" ? "filters ▼" : "filters ▲"}
            </button>
            <Filters display={filtersDisplay} />
            <Products display={filtersDisplay} />
          </div>
          <div className="store__pagination" style={visiblePagination}>
            <button
              className="store__pagination_btn store__arrow-left"
              onClick={() => {
                if (currentPage != 1) {
                  dispatch(decrementPage());
                  dispatch(setProductsVisibility());
                  window.scrollTo(0, 0);
                }
              }}
            ></button>
            <div className="store__pages_btns">
              {pagesArr.map((el, i) => (
                <button
                  className={currentPage == i + 1 ? "store__pages_btn store__active_page" : "store__pages_btn"}
                  key={el + i}
                  onClick={() => {
                    dispatch(setPage(el));
                    dispatch(setProductsVisibility());
                    window.scrollTo(0, 0);
                  }}
                >
                  {el}
                </button>
              ))}
            </div>
            <div className="store__pages_select">
              <p>Page:</p>
              <select
                name="pagination"
                className="store__pages_pagination_select"
                value={currentPage}
                onChange={(e) => {
                  dispatch(setPage(e.target.value));
                  dispatch(setProductsVisibility());
                  window.scrollTo(0, 0);
                }}
              >
                {pagesArr.map((el, i) => (
                  <option
                    key={el + i}
                    onClick={() => {
                      dispatch(setPage(el));
                      dispatch(setProductsVisibility());
                      window.scrollTo(0, 0);
                    }}
                  >
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="store__pagination_btn store__arrow-right"
              onClick={() => {
                if (currentPage != pagesArr[pagesArr.length - 1]) {
                  dispatch(incrementPage());
                  dispatch(setProductsVisibility());
                  window.scrollTo(0, 0);
                }
              }}
            ></button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
