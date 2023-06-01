import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import OrderHistoryPage from "./OrderHistoryPage";
import styles from "./styles.module.css";
import { getOrdersByEmail } from "../../store/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";

function HistoryPage() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.cart);

  const handleSubmit = () => {
    dispatch(getOrdersByEmail(search.trim()));
    setSearch("");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.historyPageWrapper}>
      
      <div className={styles.searchBar}>
        <Input
          placeholder="Input email for search"
          type="email"
          classNameWrapper={styles.search}
          onChange={(e) => handleSearch(e)}
        />
        <Button onClick={handleSubmit} className={styles.submit}>
          Search
        </Button>
      </div>

      <>
        {isLoading && (
          <div className={styles.loaderBox}>
            <Loader />
          </div>
        )}
        {orders && !isLoading && orders.length === 0 ? (
          <h1 className={styles.loaderBox}>NOT FOUND</h1>
        ) : (
          orders &&
          orders.map((order) => (
            <OrderHistoryPage key={order._id} order={order} />
          ))
        )}
      </>

    </div>
  );
}

export default HistoryPage;
