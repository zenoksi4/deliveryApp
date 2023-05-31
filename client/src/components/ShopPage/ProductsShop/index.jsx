import { useSelector } from 'react-redux';
import Button from '../../Button';
import styles from './styles.module.css'


function ProductsShop({selectedShop}) {
  const { shops } = useSelector((state) => state.shops);

  return (
    <div className={styles.productShopWrapper}>
      {
        shops && shops.find((shop) => shop._id == selectedShop)
          ?.products.map((product) => (
            <div className={styles.productCardContent}>
    
                <img className={styles.cardImg} alt='product' src={product.img}/>
                <div className={styles.cardDesc} >
                    <h3 className={styles.cardTitle} >{product.title}</h3>
                    <p className={styles.cardPrice}>{product.price}$</p>
                </div>
                <Button>Add to Cart</Button>
            </div>
          ))

      }



    </div>
  );
  }
  
export default ProductsShop;
  