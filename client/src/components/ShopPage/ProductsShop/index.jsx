import {  useSelector } from 'react-redux';
import '../../../../node_modules/react-tooltip/dist/react-tooltip.css';
import styles from './styles.module.css'
import ProductsShopCard from '../ProductShopCard';


function ProductsShop({selectedShop}) {
  const { shops } = useSelector((state) => state.shops);


  return (
    <div className={styles.productShopWrapper}>
      {
        shops && shops.find((shop) => shop._id === selectedShop)
          ?.products.map((product) => (
            <ProductsShopCard selectedShop={selectedShop}  product={product}/>
          ))

      }


    </div>
  );
  }
  
export default ProductsShop;
  