import ProductsShop from './ProductsShop';
import Shops from './Shops';
import styles from './styles.module.css'


function ShopPage() {
    return (
      <div className={styles.shopPageWrapper}>
        <Shops/>
        <ProductsShop/>
      </div>
    );
  }
  
export default ShopPage;
  