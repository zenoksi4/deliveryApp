import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import ShopPage from "./components/ShopPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { paths } from "./paths";
import CartPage from "./components/CartPage";
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "./store/shops/shopsSlice";
import { useEffect } from "react";
import Loader from "./components/Loader";
import HistoryPage from "./components/HistoryPage";

function App() {

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getShops())

  }, [dispatch]);

  return (
    <BrowserRouter>
      <ContentWrapper>
        <Header/>
        {
          isLoading ?
            <Loader/>
          :
            <Routes>
              <Route path={ paths.shop } element={ <ShopPage/> }/>
              <Route path={ paths.shoppingCart } element={ <CartPage/> }/>
              <Route path={ paths.history } element={ <HistoryPage/> }/>
            </Routes>
        }


      </ContentWrapper>
    </BrowserRouter>

  );
}

export default App;
