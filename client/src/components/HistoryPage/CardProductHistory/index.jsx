
import styles from './styles.module.css'


function CardProductHistory({product}) {
    return (
      <div className={styles.card}>
        <img 
            className={styles.img}
            alt='img_product'
            src={product.img}
        />
        <div className={styles.desc}>
            <div>{product.title}</div>
            <div> price:{product.price}</div>
            <div> count:{product.count}</div>
        </div>
      </div>
    );
  }
  
export default CardProductHistory;
  