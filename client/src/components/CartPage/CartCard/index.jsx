import styles from "./styles.module.css";
import Input from "../../Input";
import { useDispatch } from "react-redux";
import { changeCountProduct } from "../../../store/cart/cartSlice";

function CartCard({ product }) {
  const dispatch = useDispatch();
  const changeCountHandle = (e) => {
    if(e.target.value > 0){
      dispatch(changeCountProduct({
        _id: product._id,
        count: e.target.value
      }))
    }

  };

  return (
    <div className={styles.productCard}>
      <img className={styles.cardImg} alt="product" src={product.img} />
      <div className={styles.cardDesc}>
        <h4>{product.title}</h4>
        <p>price: {product.price}$</p>
        <Input type="number"  value={product.count} onChange={(e) => changeCountHandle(e)} className={styles.countCard} />
      </div>
    </div>
  );
}

export default CartCard;
