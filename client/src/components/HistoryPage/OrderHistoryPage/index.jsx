import CardProductHistory from '../CardProductHistory';
import styles from './styles.module.css'


function OrderHistoryPage({order}) {

    return (
      <div className={styles.order}>
        <div className={styles.cardsWrapper}>
          {
            order && order.productsCart.map((product) => (
              <CardProductHistory key={product._id} product={product}/>

            ))
          }


        </div>

        <h3 className={styles.title}>  Total price: {order.totalPrice}$</h3>
      </div>
    );
  }
  
export default OrderHistoryPage;
  