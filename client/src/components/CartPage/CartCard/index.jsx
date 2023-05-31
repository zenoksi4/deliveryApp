import styles from "./styles.module.css";
import Input from "../../Input";
import { useDispatch } from "react-redux";
import { changeCountProduct, deleteProductCart } from "../../../store/cart/cartSlice";
import { AiFillDelete } from "react-icons/ai";

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
  const DeleteHandler = () => {
    dispatch(deleteProductCart(product._id))
  }

  return (
    <div className={styles.productCard}>
      <img className={styles.cardImg} alt="product" src={product.img} />
      <div className={styles.cardDesc}>
        <h4>{product.title}</h4>
        <p>price: {product.price}$</p>
        <Input type="number"  value={product.count} onChange={(e) => changeCountHandle(e)} className={styles.countCard} />
        <AiFillDelete onClick={DeleteHandler} className={styles.icon}/>
      </div>
    </div>
  );
}

export default CartCard;
