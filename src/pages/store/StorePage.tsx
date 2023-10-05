import "./StorePage.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Filters } from "../../components/storePageComponents/filters/filters";
import { Products } from "../../components/storePageComponents/products/products";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incrementPage, decrementPage } from "../../store/storePage";
import { useEffect, useRef, useState } from "react";

/* for (let i = 0; i < products.length; i++) {
    for (let y = 1; y <= 6; y++) {
      for (let j = 6 * y; j < 6 * y + 6; j++) {
        if (products[j - 6]) {
          products[j - 6].setAttribute("id", `page-id-${y}`);
        }
      }
    }
  } */

export function StorePage() {
  const products = useAppSelector((state) => state.storeList.prodList);
  const currentPage = useAppSelector((state) => state.storePageNumber.pageNumber);

  const [commonPages, setCommonPages] = useState(
    products.length % 6 == 0 ? products.length / 6 : Math.floor(products.length / 6) + 1
  );

  const [pagesArr, setPagesArray] = useState([] as number[]);

  useEffect(() => {
    setCommonPages(products.length % 6 == 0 ? products.length / 6 : Math.floor(products.length / 6) + 1);
    console.log(commonPages);
    let i = 1;
    const newArr: number[] = [];
    while (i <= commonPages) {
      newArr.push(i);
      i++;
    }
    setPagesArray(newArr);
  }, [products]);

  return (
    <div id="store-page">
      <Header></Header>
      <main className="main">
        <div className="store__wrapper">
          <h2 className="store__title main__title">store</h2>
          <div className="store__content">
            <Filters />
            <Products />
          </div>
          <div className="store__pagination">
            <button className="store__pagination_btn"></button>
            <div className="store__pages_btns">
              {pagesArr.map((el) => (
                <button className="store__pages_btn">{el}</button>
              ))}
            </div>
            <button></button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
