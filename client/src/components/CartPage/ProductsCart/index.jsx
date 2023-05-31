import { useSelector } from 'react-redux';
import styles from './styles.module.css'
import CartCard from '../CartCard';

function ProductsCart() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className={styles.productsCartBox}>
      {
        cart && cart.map((product) =>(
          <CartCard product={product}/>
        ))
      } 
      </div>
    );
  }
  
export default ProductsCart;
  