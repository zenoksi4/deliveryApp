import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import ShopPage from "./components/ShopPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { paths } from "./paths";
import CartPage from "./components/CartPage";
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "./store/shops/shopsSlice";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();
  const { shops, isLoading } = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(getShops())

  }, [dispatch]);

  return (
    <BrowserRouter>
      <ContentWrapper>
        <Header/>

        <Routes>
          <Route path={ paths.shop } element={ <ShopPage/> }/>
          <Route path={ paths.shoppingCart } element={ <CartPage/> }/>
        </Routes>

      </ContentWrapper>
    </BrowserRouter>

  );
}

export default App;
