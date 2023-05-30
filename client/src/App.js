import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import ShopPage from "./components/ShopPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { paths } from "./paths";
import CartPage from "./components/CartPage";

function App() {
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
